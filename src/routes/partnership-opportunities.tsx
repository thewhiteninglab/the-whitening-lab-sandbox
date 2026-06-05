import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/partnership-opportunities")({
  head: () => ({
    meta: [
      { title: "Partnership Opportunities | The Whitening Lab" },
      {
        name: "description",
        content:
          "Explore partnerships in clinical whitening and professional oral care. Join training led by licensed / certified dental professionals and access dental lab–level wholesale solutions. Contact us!",
      },
      { property: "og:title", content: "Partnership Opportunities | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Partner with The Whitening Lab — clinical training, wholesale, and dental lab–level oral care collaborations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/partnership-opportunities" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/partnership-opportunities" },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  return (
    <SubPageLayout
      eyebrow="Work With Us"
      title={<>Partnership <span className="text-primary">Opportunities.</span></>}
      intro="Dental practices, spas, and oral-care brands — partner with The Whitening Lab to bring clinically guided, dental lab–level whitening to your clients."
    >
      <SubSection eyebrow="What We Offer" heading="Three Ways to Partner">
        <ul className="space-y-3 list-disc pl-5">
          <li><strong>Wholesale:</strong> Stock our clinically formulated whitening products in your practice or storefront.</li>
          <li><strong>Live Training:</strong> Hands-on courses led by licensed / certified dental professionals with 32+ years of experience.</li>
          <li><strong>Referral Network:</strong> Co-treat patients and deliver predictable, safe whitening outcomes.</li>
        </ul>
      </SubSection>
      <SubSection eyebrow="Get In Touch" heading="Start the Conversation">
        <p>
          Tell us about your practice and what you're looking for. We'll follow up with options that fit your goals.
        </p>
        <Link
          to="/contact-us"
          className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Contact Us
        </Link>
      </SubSection>
    </SubPageLayout>
  );
}
