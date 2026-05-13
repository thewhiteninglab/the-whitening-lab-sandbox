import { createFileRoute, Link } from "@tanstack/react-router";

import heroSmile from "@/assets/hero-smile.jpg";
import productGel from "@/assets/product-gel.jpg";
import productBrush from "@/assets/product-brush.jpg";
import productPen from "@/assets/product-pen.jpg";
import team from "@/assets/team.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";
import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after1 from "@/assets/after-1.jpg";
import after2 from "@/assets/after-2.jpg";
import after3 from "@/assets/after-3.jpg";
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
  { name: "Recovery Serum", tag: "The Daily Gel", price: "$25", img: productGel },
  { name: "Whitening Strips", tag: "6% HP", price: "$40", img: productBrush },
  { name: "Whitening Strips", tag: "10% HP", price: "$40", img: productPen },
];

const results = [
  { src: result1, label: "Patient 802 / Restorative", shades: "+10 shades" },
  { src: result2, label: "Patient 611 / Cosmetic", shades: "+12 shades" },
  { src: result3, label: "Patient 904 / Maintenance", shades: "+4 shades" },
];

const noFilters = [
  {
    before: before1,
    after: after1,
    patient: "Patient 802",
    treatment: "In-Lab Cases",
    date: "03 / 14 / 2026",
    shades: "+10 shades",
  },
  {
    before: before2,
    after: after2,
    patient: "Patient 611",
    treatment: "In-Lab Whitening",
    date: "04 / 02 / 2026",
    shades: "+12 shades",
  },
  {
    before: before3,
    after: after3,
    patient: "Patient 904",
    treatment: "Maintenance Cycle",
    date: "04 / 28 / 2026",
    shades: "+4 shades",
  },
];

const pros = [
  { role: "01 / Lead Lab Technician · Co-Owner & Founder · LDLT, CDLT", name: "Tabatha Post" },
  { role: "02 / Lead Hygienist · Co-Owner & Founder · RDH", name: "Courtney Carll" },
  { role: "03 / Lead Assistant · Co-Owner & Founder", name: "Molly St. Hilaire" },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <Link to="/" className="font-display text-3xl uppercase leading-none">
        The Whitening Lab
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
        
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
            <h1 className="font-display uppercase leading-[0.95] tracking-tighter text-balance mb-8 text-[clamp(3.5rem,12vw,11rem)]">
              We Hate <span className="text-primary">Yellow</span>
              <br />
              as much as you.
            </h1>
            <p className="max-w-[45ch] text-lg md:text-xl font-medium leading-snug text-pretty">
              The only dental lab run by actual licensed pros — whitening
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
    "Teeth Whitening",
    "No Filters",
    "Real Results",
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
    <section id="shop" className="px-6 pt-12 pb-24 md:pt-16 md:pb-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter">
            Maintain the Shade
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

function NoFiltersGallery() {
  return (
    <section id="no-filters" className="px-6 py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              No Filters / Lab Archive
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
              Real lab results.
              <br />
              No retouching.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-background/60 max-w-[28ch]">
            Hover over image to reveal after results.
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {noFilters.map((n) => (
            <NoFilterCard key={n.patient} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NoFilterCard({
  item,
}: {
  item: (typeof noFilters)[number];
}) {
  return (
    <figure className="group">
      <div className="relative overflow-hidden rounded-sm border border-background/15 aspect-[4/5] bg-background/5">
        <img
          src={item.before}
          alt={`${item.patient} before whitening`}
          loading="lazy"
          width={800}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={item.after}
          alt={`${item.patient} after whitening`}
          loading="lazy"
          width={800}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"
        />
        <span className="absolute top-3 left-3 px-2 py-1 bg-background text-foreground font-mono text-[9px] uppercase tracking-widest group-hover:opacity-0 transition-opacity">
          Before
        </span>
        <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          After
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-1 bg-background/90 text-foreground font-mono text-[9px] uppercase tracking-widest">
          {item.shades}
        </span>
      </div>
      <figcaption className="mt-3 flex justify-between items-baseline font-mono text-[10px] uppercase tracking-widest text-background/70 gap-3">
        <span className="truncate">
          {item.patient} / {item.treatment}
        </span>
        <span className="shrink-0">{item.date}</span>
      </figcaption>
    </figure>
  );
}

function Manifesto() {
  return (
    <section
      id="book"
      className="bg-primary text-primary-foreground py-16 md:py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] mb-6">
          Our Promise
        </div>
        <blockquote className="font-display text-3xl md:text-5xl uppercase leading-[0.95] tracking-tighter mb-8 text-balance">
          We don't fake results. We create them clinically.
        </blockquote>
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
            className="w-full aspect-square object-cover object-top rounded-sm"
          />
          <div>
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.4em] text-primary font-bold mb-6 inline-block border-b-2 border-primary pb-2">
              Meet the team
            </p>
            <h3 className="font-sans text-2xl leading-snug tracking-normal mb-10 text-pretty font-semibold md:text-4xl">
              At The Whitening Lab, we do one thing and do it best: Teeth Whitening. Our whitening expertise guarantees a safe, precise, and elevated experience.
            </h3>
            <div className="space-y-6">
              {pros.map((p) => (
                <div key={p.name} className="border-b border-border pb-4">
                  <p className="inline-block bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2 rounded-sm">
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
      <NoFiltersGallery />
      <Shop />
      <Manifesto />
      <Pros />
      <Footer />
    </main>
  );
}
