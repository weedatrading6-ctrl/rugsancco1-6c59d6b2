import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(40),
  email: z.string().trim().email().max(254),
  service: z.string().trim().min(2).max(100),
  projectDescription: z.string().trim().min(10).max(3000),
  language: z.enum(["so", "en", "ar"]),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      project_description: data.projectDescription,
      language: data.language,
    });

    if (error) throw new Error("Contact request could not be saved");
    return { ok: true, recipient: "contact@rugsancco.com" };
  });