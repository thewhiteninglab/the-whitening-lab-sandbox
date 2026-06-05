import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";
import welcomePacket from "@/assets/welcome-packet.pdf.asset.json";

export const Route = createFileRoute("/welcome-packet")({
  head: () => ({
    meta: [
      { title: "Welcome Packet | The Whitening Lab" },
      {
        name: "description",
        content:
          "A proper welcome from The Whitening Lab. What we do, why chair-side exists, how to maintain results, and the fine print before you sit down.",
      },
      { property: "og:title", content: "Welcome Packet | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "You booked. Smart move. Here's what to expect at The Whitening Lab — bridging the gap between at-home kits and clinical chair-side whitening.",
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

const atHome = [
  "Strips & bleaching trays (we make both)",
  "Consumer-safe peroxide ceiling",
  "Great for holding your shade",
  "Lifts surface stains, on your schedule",
  "Can't match a clinical lift, by design",
];

const chairSide = [
  "Clinical-grade actives",
  "Calibrated exposure, monitored every minute",
  "Whitens three layers deep into the enamel",
  "Whitest shade we can get in one hour",
  "Performed by licensed clinical pros",
];

const steps = [
  { n: "01", h: "Intake", t: "Shade match. Health check. We confirm you're a candidate." },
  { n: "02", h: "Prep", t: "Lip retractor. Gum barrier. Protective eyewear. Zero contact with soft tissue." },
  { n: "03", h: "Activate", t: "Clinical-grade gel plus heat and ultrasonic technology. Three rounds. We monitor every minute." },
  { n: "04", h: "Reveal", t: "New shade tab. Photos. Post-care kit. You leave whitened." },
];

const faqs = [
  { q: "Will it hurt?", a: "Sensitivity is a known side effect of any whitening, at-home or chair-side. We minimize it with calibrated exposure and a desensitizing finish. We won't promise zero zingers; we will promise we know what we're doing." },
  { q: "How white is white?", a: "Most clients shift 4–14 shades in one session. We whiten three layers deep into the enamel and pull you as white as we can get you in the hour you're in the chair. Genetics and starting shade decide the ceiling." },
  { q: "How long does it last?", a: "As long as your maintenance is good. We give you the whitest shade we can in one session; after that you're managing surface stains. Maintain at home with strips or trays, or come back for a touch-up." },
  { q: "Crowns, veneers, bonding?", a: "We can't change the color of artificial restorations. But they're porous, so we lift surface stains and whiten the natural teeth to match." },
];

const whoWeAre = [
  { h: "Clinical", t: "Not a spa. A treatment room. Calibrated gel, monitored exposure, three layers deep into the enamel." },
  { h: "Honest", t: "Can't change the color of crowns or restorations, but they're porous, so we lift surface stains to match." },
  { h: "Yours to Keep", t: "We hand you the whitest shade we can in one hour. Maintain at home with strips or trays, or come back. Your call." },
];

function WelcomePacketPage() {
  return (
    <SubPageLayout
      eyebrow="New Clients"
      title={<>Welcome <span className="text-primary">Packet</span></>}
      intro="A proper welcome, from The Whitening Lab. You booked. Smart move. This packet tells you what we do, why chair-side exists, how to maintain your results (at home or back in the chair), and the fine print before you sit down."
    >
      <SubSection eyebrow="Chapter One" heading="We Bridge the Gap">
        <p>
          The Whitening Lab exists because strips, trays, and any other at-home kit are formulated
          to a consumer-safe ceiling; they can't lift teeth the way a clinical-grade, calibrated,
          monitored chair-side session can. That's the gap. Chair-side closes it in one hour.
        </p>

        <div className="grid gap-6 md:grid-cols-2 pt-2">
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">At-home / Maintenance</p>
            <ul className="space-y-1.5 text-sm">
              {atHome.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="border border-primary rounded-sm p-5 bg-primary/5">
            <p className="mb-3"><span className="label-pill font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Chair-side / The Whitening Lab</span></p>
            <ul className="space-y-1.5 text-sm">
              {chairSide.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>

        <p className="pt-2 font-bold uppercase text-sm">
          Takeaway: Your results last as long as your maintenance is good.
        </p>
      </SubSection>

      <SubSection eyebrow="Chapter Two" heading="How It Goes (60 min, one session)">
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="border border-border rounded-sm p-5 bg-background">
              <p className="font-mono text-xs text-primary font-bold mb-2">{s.n}</p>
              <p className="font-bold uppercase text-base mb-2">{s.h}</p>
              <p className="text-sm text-foreground/80">{s.t}</p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</p>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <p className="font-bold uppercase text-sm mb-1">{f.q}</p>
                <p className="text-sm text-foreground/80">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="pt-2 font-bold uppercase text-sm">
          Short version: One hour in the chair. The rest is maintenance.
        </p>
      </SubSection>

      <SubSection eyebrow="Chapter Three" heading="Who We Are">
        <p>
          We're the only brand actually whitening teeth. Performed by licensed clinical pros.
          Proprietary formulas. Calibrated protocols. Safety-first, then results-driven, in that
          order, always. We're not a spa. We're a lab.
        </p>
        <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] text-primary">
          Mission: A brighter world, one smile at a time.
        </p>

        <div className="grid gap-4 md:grid-cols-3 pt-2">
          {whoWeAre.map((m) => (
            <div key={m.h} className="border-l-2 border-primary pl-4">
              <p className="font-bold uppercase text-sm mb-1">{m.h}</p>
              <p className="text-sm text-foreground/80">{m.t}</p>
            </div>
          ))}
        </div>

        <div className="border border-border rounded-sm p-5 bg-background mt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Before the Chair</p>
          <p className="text-sm">
            Sign the consent. Online via the booking link, or in-studio on paper.{" "}
            <span className="font-bold uppercase">No signature, no session.</span>
          </p>
        </div>
      </SubSection>

      <div className="pt-2 flex flex-wrap gap-3">
        <a
          href={welcomePacket.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Download the Full Packet (PDF)
        </a>
      </div>
    </SubPageLayout>
  );
}
