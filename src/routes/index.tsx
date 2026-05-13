import { createFileRoute, Link } from "@tanstack/react-router";
import heroSmile from "@/assets/hero-smile.jpg";
import productGel from "@/assets/product-gel.jpg";
import productBrush from "@/assets/product-brush.jpg";
import productPen from "@/assets/product-pen.jpg";
import team from "@/assets/team.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Whitening Lab — A Living Whitening Lab by Licensed Dental Pros" },
      {
        name: "description",
        content:
          "The Whitening Lab is a living whitening lab. Licensed dental pros whitening real teeth every single day — plus a maintenance line to keep the gloss between visits.",
      },
      { property: "og:title", content: "The Whitening Lab — A Living Whitening Lab" },
      {
        property: "og:description",
        content:
          "Real treatments. Real licenses. No AI. The only brand actually whitening teeth every day.",
      },
      { property: "og:image", content: heroSmile },
      { name: "twitter:image", content: heroSmile },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Overnight Gloss", tag: "The Daily Gel", price: "$42", img: productGel },
  { name: "Lab-Grade Brush", tag: "The Polisher", price: "$120", img: productBrush },
  { name: "Flash Whitener", tag: "The Quick Fix", price: "$35", img: productPen },
];

const results = [
  { src: result1, label: "Patient 802 / Restorative", shades: "+10 shades" },
  { src: result2, label: "Patient 611 / Cosmetic", shades: "+12 shades" },
  { src: result3, label: "Patient 904 / Routine", shades: "+4 shades" },
];

const pros = [
  { role: "01 / Clinical Director", name: "Dr. Marcus Vane, DDS" },
  { role: "02 / Lead Hygienist", name: "Sasha K. Chen, RDH" },
  { role: "03 / Lab Specialist", name: "Dr. Julian Moore, DMD" },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <Link to="/" className="font-display text-3xl uppercase leading-none">
        The Whitening Lab
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
        <a href="#process" className="hover:text-primary transition-colors">The Process</a>
        <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
        <a href="#results" className="hover:text-primary transition-colors">Results</a>
      </div>
      <a
        href="#book"
        className="bg-primary text-primary-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all"
      >
        Book Treatment
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-12 md:pt-16 pb-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8 animate-reveal">
            <h1 className="font-display uppercase leading-[0.85] tracking-tighter text-balance mb-8 text-[clamp(3.5rem,12vw,11rem)]">
              We Hate <span className="text-primary">Yellow</span>
              <br />
              as much as you.
            </h1>
            <p className="max-w-[45ch] text-lg md:text-xl font-medium leading-snug text-pretty">
              The only lab run by actual licensed dental pros — whitening
              teeth every single day. No AI, no gimmicks, just real results.
            </p>
          </div>
          <div className="lg:col-span-4 animate-reveal [animation-delay:150ms]">
            <img
              src={heroSmile}
              alt="Close-up of a bright, glossy, professionally whitened smile"
              width={1920}
              height={1036}
              className="w-full aspect-[16/9] object-cover rounded-sm mb-6"
            />
            <div className="flex justify-between items-center border-t border-foreground pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest">
                4.9 / Treatment Rating
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Gray · Alfred
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Real People",
    "Licensed Pros",
    "Whitening Today",
    "No AI",
    "Daily Clinical Practice",
    "Living Lab",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <section
      id="results"
      className="bg-foreground text-background py-10 overflow-hidden border-y border-foreground"
    >
      <div className="flex whitespace-nowrap animate-marquee gap-12 will-change-transform">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 px-2 shrink-0">
            <span className="font-display text-4xl md:text-5xl uppercase tracking-tighter">
              {t}
            </span>
            <span className="size-3 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ResultsGrid() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
            <span className="whitespace-nowrap">Real teeth. Real treatments.</span>
            <br />
            Real results.
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Documented daily / Lab archive
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {results.map((r) => (
            <figure key={r.label} className="group">
              <div className="overflow-hidden bg-muted rounded-sm border border-border p-3">
                <img
                  src={r.src}
                  alt={r.label}
                  loading="lazy"
                  width={800}
                  height={576}
                  className="w-full aspect-[4/5] object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{r.label}</span>
                <span>{r.shades}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="px-6 py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter">
            Maintain the Spark
          </h2>
          <a
            href="#shop"
            className="font-mono text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View All Products
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {products.map((p) => (
            <a key={p.name} href="#shop" className="group cursor-pointer block">
              <div className="aspect-square bg-card border border-border rounded-sm grid place-items-center mb-6 overflow-hidden group-hover:border-primary transition-colors">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {p.tag}
                  </p>
                  <h3 className="font-bold uppercase text-sm tracking-wide">{p.name}</h3>
                </div>
                <span className="font-mono text-sm">{p.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section
      id="book"
      className="bg-primary text-primary-foreground py-28 md:py-40 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] mb-8">
          Our Promise
        </div>
        <blockquote className="font-display text-4xl md:text-6xl uppercase leading-[0.95] tracking-tighter mb-12 text-balance">
          We don't use AI to fake results. We use actual dental licenses to
          create them.
        </blockquote>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["No Gimmicks", "Real Humans", "Licensed Pros", "Daily Clinical Practice"].map(
            (t) => (
              <span
                key={t}
                className="px-4 py-2 border border-primary-foreground/30 font-mono text-[10px] uppercase tracking-widest"
              >
                {t}
              </span>
            ),
          )}
        </div>
        <a
          href="#book"
          className="inline-block bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all"
        >
          Book a Treatment
        </a>
      </div>
    </section>
  );
}

function Pros() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <img
            src={team}
            alt="The The Whitening Lab clinical team — three licensed dental professionals in black scrubs"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Meet the licenses
            </p>
            <h3 className="font-display text-5xl md:text-6xl uppercase tracking-tighter mb-10">
              Cool. Hip. Credentialed.
            </h3>
            <div className="space-y-6">
              {pros.map((p) => (
                <div key={p.name} className="border-b border-border pb-4">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
                    {p.role}
                  </p>
                  <h4 className="text-xl font-bold uppercase tracking-wide">{p.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div>
            <span className="font-display text-4xl uppercase tracking-tighter">
              The Whitening Lab
            </span>
            <p className="mt-4 text-stone-400 max-w-[24ch] text-sm">
              The definitive standard in modern whitening. Operated by licensed
              dental pros.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">
              Locations
            </h5>
            <ul className="space-y-2 text-sm uppercase font-bold">
              <li>Lower East Side, NY</li>
              <li>Shoreditch, LDN</li>
              <li>Silver Lake, LA</li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">
              Studio
            </h5>
            <ul className="space-y-2 text-sm uppercase font-bold">
              <li>Appointments</li>
              <li>Referrals</li>
              <li>Wholesale</li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">
              Journal
            </h5>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-stone-700 pb-2"
            >
              <input
                type="email"
                placeholder="EMAIL@PRO.COM"
                aria-label="Email address"
                className="bg-transparent w-full text-xs font-mono uppercase outline-none placeholder:text-stone-600"
              />
              <button className="text-primary font-mono text-xs font-bold tracking-widest">
                JOIN
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-stone-800 pt-8 font-mono text-[10px] text-stone-500 uppercase tracking-widest gap-4 flex-wrap">
          <span>© 2026 The Whitening Lab Clinical LLC</span>
          <span>No AI was used in these results</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <ResultsGrid />
      <Shop />
      <Manifesto />
      <Pros />
      <Footer />
    </main>
  );
}
