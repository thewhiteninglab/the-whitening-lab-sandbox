import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/aftercare")({
  head: () => ({
    meta: [
      { title: "Aftercare & Maintenance | The Whitening Lab" },
      {
        name: "description",
        content:
          "Aftercare from The Whitening Lab — the first 48 hours, ongoing maintenance, and what to do if you feel sensitivity. Guidance from licensed / certified dental pros.",
      },
      { property: "og:title", content: "Aftercare & Maintenance | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Be strict for 48 hours, then live your life. Full aftercare guidance from The Whitening Lab.",
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

const avoid48 = [
  "Coffee, espresso, matcha, tea",
  "Red wine",
  "Dark soda, juice, kombucha",
  "Berries, beets, cherries",
  "Tomato sauce, soy, curry, mustard",
  "Balsamic, vinegar, citrus",
  "Chocolate, dark candy",
  "Lipstick & lip stains",
  "Smoking & vaping",
];

const safe48 = [
  "Water, sparkling water",
  "Milk, almond milk, oat milk",
  "Clear sodas (Sprite, tonic)",
  "Chicken, turkey, white fish",
  "Rice, pasta, potatoes",
  "Cauliflower, white onion",
  "Bananas, pears, apples (peeled)",
  "Plain yogurt, white cheese",
  "Egg whites",
];

const proMoves = [
  { h: "Drink through a straw", t: "Bypass the front teeth on anything that isn't water for the next 48." },
  { h: "Lip balm, not lipstick", t: "Skip pigmented lip products for two days. Stains transfer fast on porous enamel." },
  { h: "Skip the mouthwash", t: "Most are dyed or alcohol-based. Water swish only for 48." },
  { h: "Rinse, don't brush", t: "After coffee or wine, swish with water. Wait 30 minutes before brushing; enamel is soft right after. Our Recovery Serum reseals the surface fast." },
  { h: "White toothpaste only", t: "No charcoal, no colored gels. Boring, but it works." },
  { h: "Floss like you mean it", t: "Plaque holds stain. A clean tooth holds shade." },
];

const maintenance = [
  { h: "Bleaching trays", t: "Custom trays. Start with 2–3 hours depending on sensitivity. Run them when your shade tells you to." },
  { h: "The TWL strips", t: "Use the TWL strips on your own rhythm. Easy travel option." },
  { h: "Touch-up session", t: "Most patients touch up every 6 months to 2 years." },
];

const doThis = [
  { h: "Apply our Recovery Serum first", t: "Built for this. Calms zingers and reseals the surface fast. Use it the night of your session." },
  { h: "Then brush with Sensodyne", t: "Don't rinse afterward; let it sit on the teeth and do its job." },
  { h: "Lukewarm everything", t: "Skip ice water and very hot drinks for a few days." },
];

const avoid35 = [
  { h: "At-home whitening", t: "Pause trays and strips for 3–5 days. Let enamel rehydrate first." },
  { h: "Whitening toothpaste", t: "It can compound sensitivity. Stick to Sensodyne for life." },
  { h: "Acidic recovery shots", t: "Lemon water, kombucha, vinegar drinks all sting open enamel." },
];

const faqs = [
  { q: "How long will it last?", a: "Most patients touch up every 6 months to 2 years." },
  { q: "What about veneers or crowns?", a: "We can lift stains off veneers, crowns, and artificial restorations. We can't change the fabricated color." },
  { q: "Can I whiten again?", a: "Yes. Touch up when your shade tells you to." },
  { q: "Is it safe for enamel?", a: "Yes. Our gel is enamel-safe and performed by licensed / certified pros." },
];

function AftercarePage() {
  return (
    <SubPageLayout
      eyebrow="Hold Your Shade"
      title={<>Aftercare & <span className="text-primary">Maintenance</span></>}
      intro="Everything you do after your session. Read it once. Live by it for 48 hours."
    >
      <SubSection eyebrow="Day 1 & 2" heading="The First 48 Hours">
        <p>
          If it stains a white shirt, it could stain your teeth and dull your results. Your enamel
          pores are open for the next two days. Anything pigmented or acidic will absorb straight
          into the tooth. Be strict for 48 hours, then live your life.
        </p>

        <div className="grid gap-6 md:grid-cols-2 pt-2">
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="mb-3"><span className="label-pill font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Avoid</span></p>
            <ul className="space-y-1.5 text-sm">
              {avoid48.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="mb-3"><span className="label-pill font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Safe</span></p>
            <ul className="space-y-1.5 text-sm">
              {safe48.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Pro Moves</p>
          <div className="grid gap-4 md:grid-cols-2">
            {proMoves.map((m) => (
              <div key={m.h} className="border-l-2 border-primary pl-4">
                <p className="font-bold uppercase text-sm mb-1">{m.h}</p>
                <p className="text-sm text-foreground/80">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </SubSection>

      <SubSection eyebrow="Long Game" heading="It Isn't Diet. It Isn't Lifestyle. It's Maintenance.">
        <p>
          Your one-hour session takes you as bright as your enamel will go that day. From there,
          holding the shade is on you, and it's simple. Drink the coffee. Drink the wine. Just
          maintain after.
        </p>
        <div className="grid gap-4 md:grid-cols-3 pt-2">
          {maintenance.map((m) => (
            <div key={m.h} className="border border-border rounded-sm p-5 bg-background">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">As Needed</p>
              <p className="font-bold uppercase text-sm mb-2">{m.h}</p>
              <p className="text-sm text-foreground/80">{m.t}</p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection eyebrow="Zingers" heading="Sensitivity Passes. Treat It, Don't Panic.">
        <p>
          Whitening opens enamel pores, which can leave teeth temporarily sensitive to hot, cold,
          and air. It's normal. It almost always settles within 24–72 hours.
        </p>
        <div className="grid gap-6 md:grid-cols-2 pt-2">
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="mb-4"><span className="label-pill font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Do This</span></p>
            <div className="space-y-4">
              {doThis.map((m) => (
                <div key={m.h}>
                  <p className="font-bold uppercase text-sm mb-1">{m.h}</p>
                  <p className="text-sm text-foreground/80">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="mb-4"><span className="label-pill font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Avoid for 3–5 Days</span></p>
            <div className="space-y-4">
              {avoid35.map((m) => (
                <div key={m.h}>
                  <p className="font-bold uppercase text-sm mb-1">{m.h}</p>
                  <p className="text-sm text-foreground/80">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SubSection>

      <SubSection eyebrow="FAQ" heading="Quick Answers">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <p className="font-bold uppercase text-sm mb-1">{f.q}</p>
              <p className="text-sm text-foreground/80">{f.a}</p>
            </div>
          ))}
        </div>
      </SubSection>

      <div className="border border-primary rounded-sm p-6 md:p-8 bg-primary/5">
        <p className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-[0.95]">
          Be good for 48 hours. <span className="text-primary">Maintain for life.</span> That's the whole program.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap gap-3">
        <a
          href="#"
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
