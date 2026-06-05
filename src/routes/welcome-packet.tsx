import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/welcome-packet")({
  head: () => ({
    meta: [
      { title: "Welcome Packet | The Whitening Lab" },
      {
        name: "description",
        content:
          "Access our clinical whitening welcome packet at The Whitening Lab Co. Maintain results with guidance from licensed dental professionals and dental lab–level oral care protocols.",
      },
      { property: "og:title", content: "Welcome Packet | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Download The Whitening Lab welcome packet — clinically guided whitening prep & maintenance from licensed dental professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/welcome-packet" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/welcome-packet" },
    ],
  }),
  component: WelcomePacketPage,
});

function WelcomePacketPage() {
  return (
    <SubPageLayout
      eyebrow="New Clients"
      title={<>Click to View Our <span className="text-primary">Welcome Packet</span></>}
      intro="Everything you need before your first clinically guided whitening session at The Whitening Lab — prep, expectations, and pro tips from our licensed dental team."
    >
      <SubSection eyebrow="Download" heading="The Welcome Packet">
        <p>
          Our welcome packet covers what to expect on your first visit, how to prep, and how to make
          the most of your in-lab session. View the full packet below.
        </p>
        <div className="pt-4 flex flex-wrap gap-3">
          <a
            href="[CONFIRM: welcome packet PDF URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
          >
            View Welcome Packet
          </a>
        </div>
        <p className="text-sm text-muted-foreground pt-2">
          [CONFIRM: actual welcome packet PDF link or embedded content from current site]
        </p>
      </SubSection>

      <SubSection eyebrow="What's Inside" heading="The Highlights">
        <ul className="list-disc pl-5 space-y-1">
          <li>How to prep for your first session</li>
          <li>What to expect during clinically guided whitening</li>
          <li>Aftercare basics from licensed dental professionals</li>
          <li>Tips for keeping your shade between visits</li>
        </ul>
      </SubSection>
    </SubPageLayout>
  );
}
