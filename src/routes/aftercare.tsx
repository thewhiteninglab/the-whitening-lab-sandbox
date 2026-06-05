import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/aftercare")({
  head: () => ({
    meta: [
      { title: "Aftercare | The Whitening Lab" },
      {
        name: "description",
        content:
          "Explore our clinical whitening aftercare services at The Whitening Lab Co. Maintain results with guidance from licensed dental professionals and dental lab–level oral care solutions.",
      },
      { property: "og:title", content: "Aftercare | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Aftercare guidance & products from The Whitening Lab — licensed dental professionals helping you hold your shade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/aftercare" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/aftercare" },
    ],
  }),
  component: AftercarePage,
});

function AftercarePage() {
  return (
    <SubPageLayout
      eyebrow="Hold Your Shade"
      title={<>Click to View Our <span className="text-primary">Aftercare Packet</span></>}
      intro="Clinically guided aftercare from licensed dental professionals — designed to keep your whitening results bright between in-lab sessions."
    >
      <SubSection eyebrow="Download" heading="The Aftercare Packet">
        <p>
          Our aftercare packet walks you through the first 48 hours post-treatment, ongoing
          maintenance, and what to avoid to protect your shade.
        </p>
        <div className="pt-4 flex flex-wrap gap-3">
          <a
            href="[CONFIRM: aftercare packet PDF URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
          >
            View Aftercare Packet
          </a>
        </div>
        <p className="text-sm text-muted-foreground pt-2">
          [CONFIRM: actual aftercare packet PDF link or embedded content from current site]
        </p>
      </SubSection>

      <SubSection eyebrow="The Basics" heading="First 48 Hours">
        <ul className="list-disc pl-5 space-y-1">
          <li>Avoid coffee, tea, red wine, and dark sauces while pores reseal</li>
          <li>Skip tobacco and colored mouthwash</li>
          <li>Use the 3-in-1 recovery serum as directed</li>
          <li>Brush gently with the recommended sensitivity-friendly routine</li>
        </ul>
        <p className="text-sm text-muted-foreground">[CONFIRM: exact aftercare instructions from current site]</p>
      </SubSection>
    </SubPageLayout>
  );
}
