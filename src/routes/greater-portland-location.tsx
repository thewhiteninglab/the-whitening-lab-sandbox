import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/greater-portland-location")({
  head: () => ({
    meta: [
      { title: "Greater Portland Location | The Whitening Lab" },
      {
        name: "description",
        content:
          "Get clinically guided teeth whitening and professional oral care from licensed dental professionals at The Whitening Lab. Safe, dental lab–level results.",
      },
      { property: "og:title", content: "Greater Portland Location | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Clinically guided teeth whitening in Gray, Maine — minutes from Portland. Delivered by licensed dental professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/greater-portland-location" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/greater-portland-location" },
    ],
  }),
  component: GreaterPortlandPage,
});

function GreaterPortlandPage() {
  return (
    <SubPageLayout
      eyebrow="Location / Gray, ME"
      title={<>Greater Portland <span className="text-primary">Location</span></>}
      intro="Our flagship studio in Gray, Maine — minutes from Portland — delivers clinically guided whitening and professional oral care from licensed dental professionals using dental lab–level protocols."
    >
      <SubSection eyebrow="Address" heading="Find the Gray Studio">
        <p className="font-bold uppercase">15 Main St. Suite 107</p>
        <p>Gray, ME 04039</p>
        <p>
          <a href="tel:+12076502622" className="underline underline-offset-4 hover:text-primary">207-650-2622</a>
          {" · "}
          <a href="mailto:thewhiteninglabco@gmail.com" className="underline underline-offset-4 hover:text-primary">thewhiteninglabco@gmail.com</a>
        </p>
        <p>
          <a
            href="https://maps.google.com/?q=15+Main+St+Suite+107+Gray+Maine+04039"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:underline"
          >
            Open in Google Maps →
          </a>
        </p>
      </SubSection>

      <SubSection eyebrow="Hours" heading="When We're Open">
        <ul className="space-y-1">
          <li><span className="font-bold uppercase">Mon, Tue, Wed, Fri:</span> 9:00 AM – 5:00 PM</li>
          <li><span className="font-bold uppercase">Thursday:</span> Closed</li>
          <li><span className="font-bold uppercase">Sat & Sun:</span> Closed</li>
        </ul>
        <p className="text-sm text-muted-foreground">Occasional Saturday openings by special arrangement only.</p>
      </SubSection>

      <SubSection eyebrow="Local Team" heading="Who You'll See in Gray">
        <ul className="space-y-2">
          <li>
            <span className="font-bold uppercase">Tabatha Post, LDLT, CDLT</span>
            <span className="text-muted-foreground"> · Lead Lab Technician · Co-Owner & Founder</span>
          </li>
          <li>
            <span className="font-bold uppercase">Courtney Carll, RDH</span>
            <span className="text-muted-foreground"> · Lead Hygienist · Co-Owner & Founder</span>
          </li>
          <li>
            <span className="font-bold uppercase">Molly St. Hilaire</span>
            <span className="text-muted-foreground"> · Lead Assistant · Co-Owner</span>
          </li>
        </ul>
      </SubSection>

      <SubSection eyebrow="Services" heading="Available at This Location">
        <ul className="list-disc pl-5 space-y-1">
          <li>In-lab professional teeth whitening — up to 12 shades brighter</li>
          <li>Custom take-home bleaching trays</li>
          <li>Whitening maintenance & touch-up sessions</li>
          <li>Take-home aftercare products & 3-in-1 recovery serum</li>
        </ul>
      </SubSection>

      <div className="pt-6">
        <Link
          to="/book-an-appointment"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Book Gray Appointment
        </Link>
      </div>
    </SubPageLayout>
  );
}
