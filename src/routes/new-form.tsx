import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/new-form")({
  head: () => ({
    meta: [
      { title: "New Client Form | The Whitening Lab — Gray & Alfred, Maine" },
      {
        name: "description",
        content:
          "New client intake for The Whitening Lab Co — clinically guided teeth whitening by licensed dental professionals in Gray & Alfred, ME.",
      },
      { property: "og:title", content: "New Client Form | The Whitening Lab" },
      {
        property: "og:description",
        content: "Start your whitening journey with The Whitening Lab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/new-form" },
    ],
    links: [{ rel: "canonical", href: "https://www.thewhiteninglab.co/new-form" }],
  }),
  component: NewFormPage,
});

function NewFormPage() {
  return (
    <SubPageLayout
      eyebrow="New Clients"
      title={<>Get <span className="text-primary">Started.</span></>}
      intro="Welcome to The Whitening Lab. Book your first appointment or reach out with questions — our licensed dental team will take it from there."
    >
      <SubSection eyebrow="Next Step" heading="Book or Contact">
        <p>Use the buttons below to schedule your appointment or send us a message.</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            to="/book-an-appointment"
            className="bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
          >
            Book an Appointment
          </Link>
          <Link
            to="/contact-us"
            className="border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:border-primary transition-all rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
