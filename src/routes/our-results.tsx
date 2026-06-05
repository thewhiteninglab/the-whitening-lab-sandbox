import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";
import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after1 from "@/assets/after-1.jpg";
import after2 from "@/assets/after-2.jpg";
import after3 from "@/assets/after-3.jpg";

const cases = [
  { before: before1, after: after1, patient: "Patient 802", shades: "+8 shades", treatment: "In-Lab Whitening" },
  { before: before2, after: after2, patient: "Patient 611", shades: "+12 shades", treatment: "In-Lab Whitening" },
  { before: before3, after: after3, patient: "Patient 904", shades: "+4 shades", treatment: "Maintenance Cycle" },
];

export const Route = createFileRoute("/our-results")({
  head: () => ({
    meta: [
      { title: "Our Results | The Whitening Lab" },
      {
        name: "description",
        content:
          "See results from our clinically guided whitening and professional oral care services. Provided by licensed dental professionals using dental lab–level protocols. Book today!",
      },
      { property: "og:title", content: "Our Results | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Real before-and-after teeth whitening results from licensed dental professionals at The Whitening Lab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/our-results" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/our-results" },
    ],
  }),
  component: OurResultsPage,
});

function OurResultsPage() {
  return (
    <SubPageLayout
      eyebrow="Before / After"
      title={<>Our <span className="text-primary">Results</span></>}
      intro="No filters. No edits. Every result documented in-studio under the same lighting, by licensed dental professionals using dental lab–level whitening protocols."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.patient} className="border border-border rounded-sm overflow-hidden bg-background">
            <div className="grid grid-cols-2">
              <figure className="relative">
                <img src={c.before} alt={`${c.patient} before whitening`} className="w-full aspect-square object-cover" />
                <figcaption className="absolute top-2 left-2 bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest">Before</figcaption>
              </figure>
              <figure className="relative">
                <img src={c.after} alt={`${c.patient} after whitening`} className="w-full aspect-square object-cover" />
                <figcaption className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 font-mono text-[10px] uppercase tracking-widest font-bold">After</figcaption>
              </figure>
            </div>
            <div className="p-4 border-t border-border flex items-center justify-between">
              <div>
                <p className="font-bold uppercase text-sm">{c.patient}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.treatment}</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">{c.shades}</span>
            </div>
          </article>
        ))}
      </div>

      <SubSection eyebrow="The Standard" heading="What You Can Expect">
        <p>
          Most clients see 4–12 shades brighter after a single in-lab session. Your starting shade,
          treatment plan, and aftercare habits all factor into the final result — and we walk you
          through every step.
        </p>
        <p className="text-sm text-muted-foreground">[CONFIRM: any additional case studies, testimonials, or shade data from current site]</p>
      </SubSection>

      <div className="pt-2">
        <Link
          to="/book-an-appointment"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Book Your Result
        </Link>
      </div>
    </SubPageLayout>
  );
}
