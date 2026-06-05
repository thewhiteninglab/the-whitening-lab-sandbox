import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale | The Whitening Lab — Gray & Alfred, Maine" },
      {
        name: "description",
        content:
          "Wholesale whitening from The Whitening Lab Co — a leading oral care provider in Gray & Alfred, ME, specializing in clinically guided teeth whitening by licensed dental professionals.",
      },
      { property: "og:title", content: "Wholesale | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Stock dental lab–level whitening products for your practice or storefront.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/wholesale" },
    ],
    links: [{ rel: "canonical", href: "https://www.thewhiteninglab.co/wholesale" }],
  }),
  component: WholesalePage,
});

function WholesalePage() {
  return (
    <SubPageLayout
      eyebrow="For Practices & Retailers"
      title={<><span className="text-primary">Wholesale.</span></>}
      intro="Bring clinically guided, dental lab–level whitening to your patients and customers. Wholesale pricing for qualified dental practices and oral-care retailers."
    >
      <SubSection eyebrow="Why Our Products" heading="Built In A Dental Lab — Not A Beauty Lab">
        <ul className="space-y-3 list-disc pl-5">
          <li>Formulated by licensed dental professionals with 32+ years of clinical experience.</li>
          <li>Safe, predictable lift on deep-set stains.</li>
          <li>Designed for in-practice use and at-home maintenance.</li>
        </ul>
      </SubSection>
      <SubSection eyebrow="Request Pricing" heading="Get Your Wholesale Quote">
        <p>Send us your practice or business details and we'll respond with wholesale pricing, MOQs, and shipping options.</p>
        <Link
          to="/contact-us"
          className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Request Wholesale Info
        </Link>
      </SubSection>
    </SubPageLayout>
  );
}
