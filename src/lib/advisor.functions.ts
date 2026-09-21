import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const advisorSchema = z.object({
  description: z.string().trim().min(15).max(2000),
  language: z.enum(["so", "en", "ar"]),
});

export type AdvisorResult = {
  serviceKey: "architecture" | "interior" | "civil";
  headline: string;
  rationale: string;
  steps: string[];
  question: string;
};

const languageNames = { so: "Somali", en: "English", ar: "Arabic" } as const;

const responseSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    serviceKey: { type: "string", enum: ["architecture", "interior", "civil"] },
    headline: { type: "string" },
    rationale: { type: "string" },
    steps: { type: "array", items: { type: "string" } },
    question: { type: "string" },
  },
  required: ["serviceKey", "headline", "rationale", "steps", "question"],
} as const;

export const recommendService = createServerFn({ method: "POST" })
  .validator((data) => advisorSchema.parse(data))
  .handler(async ({ data }): Promise<AdvisorResult> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured");

    const instructions = [
      "You advise prospective clients of RUGSAN Construction Company, based in Mogadishu, Somalia.",
      "RUGSAN offers exactly three services: architecture (architecture design, master planning, construction documentation, 3D visualization, renovation design), interior (space planning, residential and commercial interiors, furniture layout, lighting, materials), civil (structural engineering and analysis, site supervision, construction management, quality control, cost estimation).",
      "Choose the single most relevant service for the described need.",
      "headline: a short title naming the recommended service. rationale: 2-3 sentences explaining the fit. steps: 3 to 5 short practical next steps the client can take with RUGSAN. question: one clarifying question RUGSAN should ask.",
      `Write every text value in ${languageNames[data.language]}, in natural professional language.`,
      "Never invent past projects, clients, prices, budgets, timelines, statistics, certifications or awards. Do not promise costs or dates.",
    ].join(" ");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        instructions,
        input: data.description,
        stream: true,
        reasoning: { effort: "low", summary: "auto" },
        text: {
          format: {
            type: "json_schema",
            name: "rugsan_service_recommendation",
            strict: true,
            schema: responseSchema,
          },
        },
      }),
    });

    if (!res.ok || !res.body) {
      if (res.status === 429) throw new Error("AI is busy right now. Please try again shortly.");
      if (res.status === 402) throw new Error("AI credits are exhausted for this workspace.");
      throw new Error("The AI recommendation could not be generated.");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let text = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const event = JSON.parse(payload) as {
            type?: string;
            delta?: string;
            response?: { output_text?: string };
          };
          if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
            text += event.delta;
          } else if (event.type === "response.completed" && event.response?.output_text) {
            if (!text) text = event.response.output_text;
          }
        } catch {
          // ignore keep-alive or non-JSON lines
        }
      }
    }

    if (!text.trim()) throw new Error("The AI recommendation could not be generated.");

    const parsed = z
      .object({
        serviceKey: z.enum(["architecture", "interior", "civil"]),
        headline: z.string().min(1).max(200),
        rationale: z.string().min(1).max(1200),
        steps: z.array(z.string().min(1).max(300)).min(1).max(6),
        question: z.string().min(1).max(300),
      })
      .parse(JSON.parse(text));

    return parsed;
  });
