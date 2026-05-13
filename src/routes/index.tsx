import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Instagram, Youtube, Facebook, Loader2 } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import { useCartSync } from "@/hooks/useCartSync";
import {
  STOREFRONT_PRODUCTS_QUERY,
  storefrontApiRequest,
  type ShopifyProduct,
} from "@/lib/shopify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "The Whitening Lab",
          description:
            "A living whitening lab run by licensed dental pros — whitening real teeth every single day.",
          areaServed: ["Gray, ME", "Alfred, ME", "Bar Harbor, ME"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "100",
          },
        }),
      },
    ],
  }),
  component: Index,
});

// Legacy mock products removed — Shop now uses real Shopify Storefront API.
// Keep image imports referenced to prevent unused-import warnings.
void productGel; void productBrush; void productPen;

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
  { role: "01 / Lead Lab Technician · Co-Owner & Founder · LDLT, CDLT", name: "Tabatha Post", location: "Gray" },
  { role: "02 / Lead Hygienist · Co-Owner & Founder · RDH", name: "Courtney Carll", location: "Gray" },
  { role: "03 / Lead Assistant · Co-Owner", name: "Molly St. Hilaire", location: "Gray" },
  { role: "04 / Hygienist · RDH", name: "Tamara Sharp", location: "Alfred" },
  { role: "05 / Hygienist · RDH · Affiliate Office", name: "Britta Griffiths", location: "Bar Harbor" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#shop", label: "Shop" },
    { href: "#process", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "#partner", label: "Partner" },
    { href: "#book", label: "Book Treatment" },
  ];
  const goTo = (href: string) => {
    const id = href.replace("#", "");
    setOpen(false);

    const smoothScrollTo = (target: number) => {
      const start = window.scrollY;
      const distance = target - start;
      const duration = 650;
      const startedAt = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const tryScroll = (attempt = 0) => {
      const locked = document.body.style.pointerEvents === "none";
      const el = document.getElementById(id);
      if ((locked || !el) && attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 30);
        return;
      }
      if (el) {
        const target = window.scrollY + el.getBoundingClientRect().top;
        smoothScrollTo(target);
        history.replaceState(null, "", href);
      }
    };
    requestAnimationFrame(() => tryScroll());
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <Link to="/" className="font-display text-3xl uppercase leading-none">
        The Whitening Lab
      </Link>
      <div className="flex items-center gap-3">
        <CartDrawer />
        <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="group bg-primary text-primary-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          More to Smile About
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-data-[state=open]:rotate-180"
          >
            ▾
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={10}
          onCloseAutoFocus={(event) => event.preventDefault()}
          className="min-w-[220px] rounded-sm border border-border bg-background p-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
        >
          {links.map((l) => (
            <DropdownMenuItem
              key={l.href}
              onSelect={(event) => {
                event.preventDefault();
                goTo(l.href);
              }}
              className="cursor-pointer rounded-sm px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold focus:bg-primary focus:text-primary-foreground"
            >
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
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
            <p className="max-w-[45ch] text-lg md:text-xl font-medium leading-snug text-pretty mb-8">
              The only dental lab run by actual licensed/certified pros — whitening
              teeth every single day. No AI, no gimmicks, just real results.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="bg-foreground text-background px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
              >
                Book a Treatment
              </a>
              <a
                href="#shop"
                className="px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold border border-foreground hover:bg-foreground hover:text-background transition-all rounded-sm"
              >
                Shop Strips
              </a>
            </div>
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
                5.0 / Treatment Rating
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

function TrustStrip() {
  const items = [
    "Licensed Pros",
    "Teeth Whitening",
    "60-Sec Booking",
  ];
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-border px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-muted-foreground/60" />
            {t}
          </span>
        ))}
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

const services = [
  {
    name: "New Patient",
    price: "$295",
    duration: "1 hr",
    desc: "Comprehensive whitening — full assessment, in-lab treatment, and Recovery Serum finish. The best place to start.",
    includes: [
      "Full shade & smile assessment",
      "60-minute in-lab whitening session",
      "Recovery Serum applied in-chair (take-home pen sold separately)",
      "Maintenance plan tailored to you",
    ],
    bookHref: "https://book.thewhiteninglab.com/new-patient",
    featured: true,
  },
  {
    name: "60 Min Touch-Up",
    price: "$180",
    duration: "60 min",
    desc: "Maintain your shade with a focused in-lab session for returning clients.",
    includes: [
      "Returning-client check-in",
      "60-minute whitening session",
      "Recovery Serum finish in-chair (take-home pen sold separately)",
    ],
    bookHref: "https://book.thewhiteninglab.com/60-min-touchup",
  },
  {
    name: "40 Min Touch-Up",
    price: "$150",
    duration: "40 min",
    desc: "Quick brightening boost — perfect between events or before a big day.",
    includes: [
      "Express 40-minute whitening session",
      "Recovery Serum finish in-chair (take-home pen sold separately)",
      "Ideal pre-event refresh",
    ],
    bookHref: "https://book.thewhiteninglab.com/40-min-touchup",
  },
  {
    name: "Bleaching Trays",
    price: "$275",
    duration: "Take-Home",
    desc: "Custom-fit trays for at-home use. Includes one syringe of professional whitening solution.",
    includes: [
      "Custom-molded upper & lower trays",
      "One syringe of professional gel",
      "At-home use guide",
      "Refill syringes available",
    ],
    bookHref: "https://book.thewhiteninglab.com/bleaching-trays",
  },
];

function Services() {
  return (
    <section id="services" className="px-6 pt-24 pb-8 md:pt-28 md:pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Services / In-Lab Treatments
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
              Pick Your <span className="text-primary">Brightness.</span>
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground max-w-[28ch]">
            Tap a treatment to see what's included and book.
          </span>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="service-0"
          className="w-full border-t border-border"
        >
          {services.map((s, i) => (
            <AccordionItem
              key={s.name}
              value={`service-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 hover:no-underline group">
                <div className="flex flex-1 items-center justify-between gap-4 pr-4">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="font-mono text-[10px] text-muted-foreground tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tighter leading-none truncate group-hover:text-primary transition-colors">
                      {s.name}
                    </h3>
                    {s.featured && (
                      <span className="hidden sm:inline-block bg-foreground text-background font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0">
                        Start Here
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-4 sm:gap-6 shrink-0">
                    <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.duration}
                    </span>
                    <span className="font-display text-xl sm:text-2xl tracking-tighter">
                      {s.price}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 pl-0 sm:pl-10">
                <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-start">
                  <p className="md:col-span-2 text-base md:text-lg leading-snug text-pretty">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex gap-2">
                        <span className="text-primary">+</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={s.bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all"
                  >
                    Book {s.name} <span aria-hidden="true">→</span>
                  </a>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.duration} · {s.price}
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function TikTokIcon({ className, strokeWidth: _sw }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.34v6.59a6.25 6.25 0 1 1-6.25-6.25c.26 0 .51.02.75.06v3.13a3.13 3.13 0 1 0 2.13 2.96V3h3.37z" />
    </svg>
  );
}

function ResultsGrid() {
  return (
    <section className="px-6 pt-12 pb-24">
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

function ShopProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [adding, setAdding] = useState(false);

  const node = product.node;
  const variant = node.variants.edges[0]?.node;
  const image = node.images.edges[0]?.node;
  const price = variant?.price ?? node.priceRange.minVariantPrice;

  const handleAdd = async () => {
    if (!variant) return;
    setAdding(true);
    try {
      await addItem({
        product,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        quantity: 1,
        selectedOptions: variant.selectedOptions || [],
      });
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="group block">
      <div className="aspect-square bg-card border border-border rounded-sm mb-6 overflow-hidden group-hover:border-foreground transition-colors">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full grid place-items-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            No Image
          </div>
        )}
      </div>
      <div className="flex justify-between items-baseline mb-4">
        <h3 className="font-bold uppercase text-sm tracking-wide pr-2">{node.title}</h3>
        <span className="font-mono text-sm shrink-0">
          ${parseFloat(price.amount).toFixed(2)}
        </span>
      </div>
      <button
        onClick={handleAdd}
        disabled={!variant?.availableForSale || adding || isLoading}
        className="w-full border border-foreground py-3 font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-foreground hover:text-background active:scale-[0.99] transition-all rounded-sm disabled:opacity-50 inline-flex items-center justify-center gap-2"
      >
        {adding ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : variant?.availableForSale ? (
          "Add to Cart"
        ) : (
          "Sold Out"
        )}
      </button>
    </div>
  );
}

function Shop() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: async () => {
      const res = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 12, query: null });
      return (res?.data?.products?.edges || []) as ShopifyProduct[];
    },
    staleTime: 60_000,
  });

  return (
    <section id="shop" className="px-6 pt-12 pb-24 md:pt-16 md:pb-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter">
            Maintain the Shade
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Ships from the lab
          </span>
        </div>
        {isLoading ? (
          <div className="py-24 grid place-items-center">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : isError || !data || data.length === 0 ? (
          <div className="py-24 grid place-items-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            No products found
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {data.map((p) => (
              <ShopProductCard key={p.node.id} product={p} />
            ))}
          </div>
        )}
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
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
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
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-background/15 pt-8">
          <p className="font-display text-2xl sm:text-3xl uppercase tracking-tighter leading-[0.95] max-w-[24ch]">
            This is just a <span className="text-primary">taste.</span>
          </p>
          <a
            href="https://www.instagram.com/thewhiteninglab"
            target="_blank"
            rel="noopener noreferrer"
            className="group/ig inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all"
          >
            See the Rest of the Smiles
            <span aria-hidden="true" className="transition-transform group-hover/ig:translate-x-1">→</span>
          </a>
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
      className="bg-background px-6 py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-sm px-6 py-16 md:py-20 text-center">
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
    <section id="process" className="px-6 pt-4 pb-10 md:pt-6 md:pb-12">
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
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.4em] text-foreground font-bold mb-6 inline-block border-b-2 border-foreground pb-2">
              Meet the team
            </p>
            <h3 className="font-sans text-2xl leading-snug tracking-normal mb-10 text-pretty font-semibold md:text-4xl">
              At The Whitening Lab, we do one thing and do it best: Teeth Whitening. Our whitening expertise guarantees a safe, precise, and elevated experience.
            </h3>
            <div className="space-y-6">
              {pros.map((p) => (
                <div key={p.name} className="border-b border-border pb-4">
                  <p className="inline-block bg-foreground text-background font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2 rounded-sm">
                    {p.role}
                  </p>
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h4 className="text-xl font-bold uppercase tracking-wide">{p.name}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.location}, ME
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partner() {
  return (
    <section id="partner" className="px-6 pt-4 pb-10 md:pt-6 md:pb-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Partner / Wholesale / Training
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] mb-6">
              Partner with <span className="text-primary">The Lab.</span>
            </h2>
            <p className="text-base md:text-lg leading-snug text-pretty max-w-[38ch]">
              The demand for professional teeth whitening has never been higher.
              Expand your practice, diversify your revenue, or build your own
              business — with training designed for growth.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            <input
              required
              type="text"
              placeholder="Full Name"
              aria-label="Full name"
              maxLength={100}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              required
              type="text"
              placeholder="Company / Practice"
              aria-label="Company or practice"
              maxLength={150}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              required
              type="email"
              placeholder="Email"
              aria-label="Email"
              maxLength={255}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              aria-label="Phone"
              maxLength={30}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Years of Experience"
              aria-label="Years of experience"
              maxLength={50}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Location / Where You'd Practice"
              aria-label="Location"
              maxLength={150}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <div className="sm:col-span-2 flex flex-wrap gap-x-6 gap-y-2 px-1 py-1 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-muted-foreground mr-2">Interested in:</span>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary" /> Training
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary" /> Wholesale
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary" /> In-House Lab
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary" /> Affiliate Office
              </label>
            </div>
            <textarea
              placeholder="Tell us a bit more (optional)"
              aria-label="Message"
              rows={3}
              maxLength={1000}
              className="sm:col-span-2 bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all"
            >
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Does professional whitening damage enamel?",
    a: "No. Our peroxide-based gels are clinically formulated and applied by licensed pros to lift stains from the surface and within the enamel — without weakening tooth structure. Sensitivity, if any, is temporary.",
  },
  {
    q: "How many shades whiter will I actually get?",
    a: "Most clients leave 5–12 shades brighter after a single in-lab session. Results depend on your starting shade, diet, and habits. We document every result — no filters, no edits.",
  },
  {
    q: "How long do results last?",
    a: "Anywhere from 6 months to 2+ years with proper maintenance. Coffee, wine, and tobacco accelerate fading — our take-home line is built to keep you on-shade in between visits.",
  },
  {
    q: "Will it hurt or make my teeth sensitive?",
    a: "Some clients feel mild, short-lived sensitivity for 24–48 hours. Every treatment finishes with our award-winning 3-in-1 Recovery Serum, and we strongly recommend taking a brush-tip pen home — we'll walk you through several options to mitigate sensitivity so you stay comfortable between sessions.",
  },
  {
    q: "Is it safe if I have crowns, veneers, or fillings?",
    a: "Absolutely. Whitening gel will lift surface stains from crowns, veneers, and fillings — but it can't change the original shade they were fabricated in. We'll assess your smile first and map out a plan so your natural teeth and restorations finish uniform.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="px-6 pt-10 pb-20 md:pt-12 md:pb-24 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            FAQ / The Real Questions
          </p>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9]">
            Asked. <span className="text-primary">Answered.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left font-bold uppercase tracking-wide text-base md:text-lg hover:no-underline hover:text-primary">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-3">
                Follow the Lab
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/thewhiteninglab", label: "Instagram" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@thewhiteninglab", label: "TikTok" },
                  { Icon: Youtube, href: "https://www.youtube.com/@thewhiteninglab", label: "YouTube" },
                  { Icon: Facebook, href: "https://www.facebook.com/thewhiteninglab", label: "Facebook" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative grid place-items-center size-11 rounded-sm border border-stone-700 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_var(--primary)] transition-all duration-300"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">
              Locations
            </h5>
            <ul className="space-y-2 text-sm uppercase font-bold">
              <li>Gray, ME</li>
              <li>Alfred, ME</li>
              <li>Bar Harbor, ME <span className="text-stone-500 font-mono text-[10px]">/ Affiliate</span></li>
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
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-3">
              The List
            </h5>
            <p className="font-display text-2xl uppercase tracking-tighter leading-[0.95] mb-2">
              Love Your <span className="text-primary">Teeth?</span>
            </p>
            <p className="text-stone-400 text-sm mb-6 max-w-[28ch]">
              Drops, deals, and shade-keeping tips — straight to your inbox.
            </p>
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
              <button className="text-primary font-mono text-xs font-bold tracking-widest whitespace-nowrap pl-3">
                COUNT ME IN
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
  useCartSync();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustStrip />
      <Marquee />
      <Services />
      <ResultsGrid />
      <NoFiltersGallery />
      <Manifesto />
      <Pros />
      <Shop />
      <Partner />
      <FAQ />
      <Footer />
    </main>
  );
}
