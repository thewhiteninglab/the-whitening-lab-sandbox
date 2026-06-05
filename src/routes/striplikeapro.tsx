import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/striplikeapro")({
  head: () => ({
    meta: [
      { title: "Strip Like a Pro | The Whitening Lab - Gray & Alfred, Maine" },
      {
        name: "description",
        content:
          "Achieve a brighter smile with clinically guided teeth whitening at The Whitening Lab in Gray & Alfred, Maine. Provided by licensed dental professionals using dental lab–level protocols.",
      },
      { property: "og:title", content: "Strip Like a Pro | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Clinically guided whitening strips & take-home protocols from licensed dental pros in Gray & Alfred, Maine.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/striplikeapro" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/striplikeapro" },
    ],
  }),
  component: StripLikeAProPage,
});

function StripLikeAProPage() {
  return (
    <SubPageLayout
      eyebrow="Take-Home Protocol"
      title={<>Strip Like <span className="text-primary">a Pro</span></>}
      intro="Clinically guided whitening you can take home — formulated and protocolled by licensed dental professionals at The Whitening Lab in Gray & Alfred, Maine."
    >
      <SubSection eyebrow="What It Is" heading="Pro-Grade. At Home.">
        <p>
          Strip Like a Pro brings dental lab–level whitening into your daily routine. Every step is
          built on the same protocols we use in-lab, so you can maintain results between professional
          sessions without guesswork.
        </p>
      </SubSection>

      <SubSection eyebrow="How It Works" heading="The Protocol">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Start with a clinically guided consultation at our Gray or Alfred studio.</li>
          <li>Receive a personalized take-home plan — strips, gel, or custom trays.</li>
          <li>Follow the pro-led aftercare schedule between in-lab sessions.</li>
        </ol>
        <p className="text-sm text-muted-foreground">[CONFIRM: exact product details, pricing, and protocol steps from current site]</p>
      </SubSection>

      <SubSection eyebrow="Why Pros" heading="Real Licenses. Real Results.">
        <p>
          Every Strip Like a Pro client is supported by licensed dental professionals — not influencers,
          not retail clerks. That's the difference between a guess and a guided result.
        </p>
      </SubSection>

      <div className="pt-6 flex flex-wrap gap-3">
        <Link
          to="/book-an-appointment"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Book a Consultation
        </Link>
        <Link
          to="/aftercare"
          className="inline-block px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold border border-foreground hover:bg-foreground hover:text-background transition-all rounded-sm"
        >
          View Aftercare
        </Link>
      </div>
    </SubPageLayout>
  );
}
