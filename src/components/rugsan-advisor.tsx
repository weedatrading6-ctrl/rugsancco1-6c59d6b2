import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Loader2, MessageCircleQuestion, Sparkle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { recommendService, type AdvisorResult } from "@/lib/advisor.functions";
import { getAdvisorCopy } from "@/lib/advisor-content";
import { getCopy, type Language } from "@/lib/rugsan-content";

export function RugsanAdvisor({ language, onContact }: { language: Language; onContact: () => void }) {
  const copy = getAdvisorCopy(language);
  const siteCopy = getCopy(language);
  const ask = useServerFn(recommendService);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (description.trim().length < 15) {
      setStatus("error");
      setMessage(copy.short);
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const data = await ask({ data: { description: description.trim(), language } });
      setResult(data);
      setStatus("idle");
    } catch {
      setStatus("error");
      setMessage(copy.error);
    }
  };

  const reset = () => {
    setResult(null);
    setStatus("idle");
    setMessage("");
  };

  return (
    <section id="advisor" className="section advisor-section">
      <div className="container advisor-grid">
        <div className="advisor-intro">
          <p className="eyebrow">{copy.label}</p>
          <h2>{copy.title}</h2>
          <p className="advisor-body">{copy.body}</p>
          <p className="advisor-note">{copy.note}</p>
        </div>

        <div className="advisor-panel">
          {result ? (
            <div className="advisor-result">
              <p className="advisor-result-label">{copy.resultLabel}</p>
              <h3>{siteCopy.serviceNames[result.serviceKey]}</h3>
              <p className="advisor-headline">{result.headline}</p>
              <p className="advisor-rationale">{result.rationale}</p>
              <p className="advisor-result-label">{copy.stepsLabel}</p>
              <ul>
                {result.steps.map((step) => (
                  <li key={step}>
                    <Check aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="advisor-question">
                <MessageCircleQuestion aria-hidden="true" />
                <span>
                  <small>{copy.questionLabel}</small>
                  {result.question}
                </span>
              </p>
              <div className="advisor-actions">
                <Button variant="hero" size="xl" onClick={onContact}>
                  {copy.contactCta}
                  <ArrowRight />
                </Button>
                <Button variant="heroOutline" size="xl" onClick={reset}>
                  {copy.again}
                </Button>
              </div>
            </div>
          ) : (
            <form className="advisor-form" onSubmit={onSubmit}>
              <label>
                {siteCopy.fields.description}
                <Textarea
                  name="advisor-description"
                  rows={6}
                  value={description}
                  placeholder={copy.placeholder}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              <Button variant="hero" size="xl" type="submit" disabled={status === "loading"}>
                {status === "loading" ? <Loader2 className="advisor-spin" /> : <Sparkle />}
                {status === "loading" ? copy.loading : copy.submit}
              </Button>
              {status === "error" && (
                <div className="form-error" role="alert">
                  <p>{message}</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
