import { createFileRoute } from "@tanstack/react-router";
import { RugsanHome } from "@/components/rugsan-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rugsan Construction Company | Naqshadeyn, Injineernimo & Dhisme" },
      { name: "description", content: "Rugsan waxay bixisaa naqshadaynta dhismaha iyo gudaha, injineernimada madaniga, iyo adeegyada dhismaha." },
      { property: "og:title", content: "Rugsan Construction Company" },
      { property: "og:description", content: "Naqshadeyn, injineernimo, iyo dhisme casri ah oo waara." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <RugsanHome />;
}
