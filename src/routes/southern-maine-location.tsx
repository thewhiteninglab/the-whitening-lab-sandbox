import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/southern-maine-location")({
  head: () => ({
    meta: [
      { title: "Southern Maine Location | The Whitening Lab" },
      {
        name: "description",
        content:
          "Get clinically guided teeth whitening from licensed dental professionals at The Whitening Lab. Safe, dental lab–level oral care with personalized treatment. Book today!",
      },
      { property: "og:title", content: "Southern Maine Location | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Clinically guided teeth whitening in Alfred, Maine from licensed dental professionals. Dental lab–level oral care. Book today!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/southern-maine-location" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/southern-maine-location" },
    ],
  }),
  component: SouthernMainePage,
});

function SouthernMainePage() {
  return (
    <SubPageLayout
      eyebrow="Location / Alfred, ME"
      title={<>Southern Maine <span className="text-primary">Location</span></>}
      intro="Clinically guided teeth whitening in Alfred, Maine — delivered by licensed dental professionals using dental lab–level protocols. Personalized treatment for the Southern Maine community."
    >
      <SubSection eyebrow="Address" heading="Find the Alfred Studio">
        <p className="font-bold uppercase">12 Waterboro Rd</p>
        <p>Alfred, ME 04002</p>
        <p>
          <a href="tel:+12074940333" className="underline underline-offset-4 hover:text-primary">207-494-0333</a>
          {" · "}
          <a href="mailto:thewhiteninglabco@gmail.com" className="underline underline-offset-4 hover:text-primary">thewhiteninglabco@gmail.com</a>
        </p>
        <p>
          <a
            href="https://maps.google.com/?q=12+Waterboro+Rd+Alfred+Maine+04002"
            target="_blank"
            rel="noopener noreferrer"
            className="label-pill font-mono text-xs uppercase tracking-widest hover:brightness-110"
          >
            Open in Google Maps →
          </a>
        </p>
      </SubSection>

      <SubSection eyebrow="Hours" heading="When We're Open">
        <p className="font-bold uppercase">By appointment only</p>
      </SubSection>

      <SubSection eyebrow="Local Team" heading="Who You'll See in Alfred">
        <ul className="space-y-2">
          <li>
            <span className="font-bold uppercase">Tamara Sharp, RDH</span>
            <span className="text-muted-foreground"> · Hygienist · Alfred</span>
          </li>
        </ul>
        <p>
          Tamara is a Registered Dental Hygienist providing clinically guided whitening and oral care
          at our Alfred studio. Every session is delivered with the same dental lab–level protocols
          used at our Gray location.
        </p>
      </SubSection>

      <SubSection eyebrow="Services" heading="Available at This Location">
        <ul className="list-disc pl-5 space-y-1">
          <li>In-lab professional teeth whitening</li>
          <li>Custom take-home bleaching trays</li>
          <li>Whitening maintenance & touch-ups</li>
          <li>Aftercare guidance from licensed dental professionals</li>
        </ul>
      </SubSection>

      <div className="pt-6">
        <Link
          to="/book-an-appointment"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Book Alfred Appointment
        </Link>
      </div>
    </SubPageLayout>
  );
}
