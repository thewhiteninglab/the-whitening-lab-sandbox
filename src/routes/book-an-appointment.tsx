import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/book-an-appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | The Whitening Lab" },
      {
        name: "description",
        content:
          "Book clinically guided teeth whitening at The Whitening Lab. Licensed dental professionals deliver safe, dental lab–level oral care. Schedule today!",
      },
      { property: "og:title", content: "Book an Appointment | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Pick your location and book clinically guided teeth whitening with licensed dental pros.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/book-an-appointment" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/book-an-appointment" },
    ],
  }),
  component: BookPage,
});

const locations = [
  {
    name: "Greater Portland",
    city: "Gray, ME",
    address: "15 Main St. Suite 107, Gray, ME 04039",
    bookUrl: "https://msha.ke/thewhiteninglab",
  },
  {
    name: "Southern Maine",
    city: "Alfred, ME",
    address: "[CONFIRM: Alfred street address]",
    bookUrl: "https://msha.ke/thewhiteninglab",
  },
];

function BookPage() {
  return (
    <SubPageLayout
      eyebrow="Schedule"
      title={<>Select Your Whitening Lab <span className="text-primary">Location</span></>}
      intro="Book a clinically guided whitening session at the studio closest to you. Every appointment is delivered by licensed dental professionals."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <article key={loc.name} className="border border-border rounded-sm p-6 md:p-8 bg-background flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              {loc.city}
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-[0.95] mb-4">
              {loc.name}
            </h2>
            <p className="text-sm text-foreground/80 mb-8 flex-1">{loc.address}</p>
            <a
              href={loc.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-4 text-center font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
            >
              Book {loc.name} →
            </a>
          </article>
        ))}
      </div>
      <p className="text-sm text-muted-foreground pt-4">
        [CONFIRM: booking links per location — both currently point to the shared msha.ke booking page]
      </p>
    </SubPageLayout>
  );
}
