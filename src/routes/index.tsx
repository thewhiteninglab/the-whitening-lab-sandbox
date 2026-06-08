import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Instagram, Youtube, Facebook, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
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
      { title: "Teeth Whitening Gray, Maine | The Whitening Lab — Dental Pros" },
      {
        name: "description",
        content:
          "Professional teeth whitening in Gray, Maine by licensed dental lab pros. In-lab treatments, custom take-home bleaching trays, and maintenance products. Up to 12 shades whiter. Book at The Whitening Lab.",
      },
      {
        name: "keywords",
        content:
          "teeth whitening, teeth whitening Gray Maine, teeth whitening Maine, dental lab Gray Maine, The Whitening Lab, professional teeth whitening, cosmetic teeth whitening, bleaching trays, in-lab whitening, dental hygienist whitening, Portland Maine teeth whitening, Alfred Maine, Bar Harbor Maine",
      },
      { name: "author", content: "The Whitening Lab" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "US-ME" },
      { name: "geo.placename", content: "Gray, Maine" },
      { name: "geo.position", content: "43.8884;-70.3328" },
      { name: "ICBM", content: "43.8884, -70.3328" },
      { property: "og:title", content: "Teeth Whitening Gray, Maine | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Professional teeth whitening from licensed / certified dental pros in Gray, Maine. Real treatments. Real licenses. Up to 12 shades whiter.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "The Whitening Lab" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: heroSmile },
      { property: "og:image:alt", content: "Professional teeth whitening results at The Whitening Lab in Gray, Maine" },
      { name: "twitter:image", content: heroSmile },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Teeth Whitening Gray, Maine | The Whitening Lab" },
      { name: "twitter:description", content: "Professional teeth whitening by licensed / certified dental pros in Gray, Maine." },
    ],
    links: [
      { rel: "canonical", href: "/" },
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
          "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
          "@id": "https://thewhiteninglab.co/#business",
          name: "The Whitening Lab",
          alternateName: "The Whitening Lab Co",
          description:
            "Professional teeth whitening in Gray, Maine by licensed dental lab technicians and hygienists. In-lab whitening sessions, custom bleaching trays, and maintenance products.",
          url: "https://thewhiteninglab.co",
          image: heroSmile,
          logo: heroSmile,
          telephone: "+1-207-650-2622",
          email: "thewhiteninglabco@gmail.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "15 Main St. Suite 107",
            addressLocality: "Gray",
            addressRegion: "ME",
            postalCode: "04039",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.8884,
            longitude: -70.3328,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "15:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Gray, ME" },
            { "@type": "City", name: "Portland, ME" },
            { "@type": "City", name: "Alfred, ME" },
            { "@type": "City", name: "Bar Harbor, ME" },
            { "@type": "State", name: "Maine" },
          ],
          serviceType: [
            "Teeth Whitening",
            "Cosmetic Teeth Whitening",
            "In-Lab Whitening Treatment",
            "Custom Bleaching Trays",
            "Whitening Maintenance",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Teeth Whitening Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "In-Lab Teeth Whitening Session",
                  description: "Professional in-lab teeth whitening performed by licensed dental hygienists in Gray, Maine.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Bleaching Trays",
                  description: "Custom-fit take-home bleaching trays made by licensed dental lab technicians.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Whitening Maintenance",
                  description: "Ongoing professional whitening maintenance to keep your smile bright.",
                },
              },
            ],
          },
          sameAs: [
            "https://share.google/53AdeOYKXHHpam0yK",
            "https://www.instagram.com/thewhiteninglabco",
            "https://www.tiktok.com/@thewhiteninglabco",
            "https://www.youtube.com/@TheWhiteningLabCo",
            "https://www.facebook.com/share/1BC3zFw8g4/?mibextid=wwXIfr",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "100",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is teeth whitening at The Whitening Lab safe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. All treatments are performed by licensed dental lab technicians and registered dental hygienists using professional-grade products in our Gray, Maine lab.",
              },
            },
            {
              "@type": "Question",
              name: "How many shades whiter will my teeth get?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most clients see between 4 and 12 shades whiter after a single in-lab session, depending on starting shade and treatment plan.",
              },
            },
            {
              "@type": "Question",
              name: "Where is The Whitening Lab located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We are at 15 Main St. Suite 107, Gray, Maine 04039, serving Portland, Alfred, Bar Harbor, and all of Maine.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book a teeth whitening appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Book directly through our booking link at https://msha.ke/thewhiteninglab or call (207) 650-2622.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://thewhiteninglab.co/",
            },
          ],
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
  { src: result1, label: "Patient 802 / Restorative", shades: "+8 shades" },
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
    shades: "+8 shades",
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

const BOOKING_URL = "https://msha.ke/thewhiteninglab";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#no-filters", label: "Results" },
    { href: "#shop", label: "Shop" },
    { href: "#faq", label: "FAQ" },
    { href: "#partner", label: "Partner" },
    { href: BOOKING_URL, label: "BOOK NOW" },
  ];
  const goTo = (href: string) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const id = href.replace("#", "");

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
          <div className="my-1 border-t border-border" />
          <div className="px-3 pt-2 pb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Locations
          </div>
          {[
            { to: "/greater-portland-location", label: "Gray" },
            { to: "/southern-maine-location", label: "Alfred" },
          ].map((l) => (
            <DropdownMenuItem key={l.to} asChild className="cursor-pointer rounded-sm px-3 py-2.5 font-mono text-[11px] uppercase tracking-widest font-bold focus:bg-primary focus:text-primary-foreground">
              <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
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
    <section className="relative px-6 pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-[820px] mx-auto">
        <div className="grid gap-10 items-end">
          <div className="animate-reveal">
            <h1 className="font-display uppercase leading-[0.95] tracking-tighter text-balance mb-8 text-[clamp(3.5rem,12vw,11rem)]">
              We Hate <span className="text-primary">Yellow</span>
              <br />
              as much as you.
            </h1>
            <p className="max-w-[45ch] text-lg md:text-xl font-medium leading-snug text-pretty mb-8">
              Professional teeth whitening by actual licensed / certified dental pros — clinically delivered, every single day. No AI, no gimmicks, just real results.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="animate-reveal [animation-delay:150ms]">
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
    "Licensed / Certified Pros",
    "Teeth Whitening",
    "60-Sec Booking",
  ];
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-border px-6 py-4"
    >
      <div className="max-w-[820px] mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
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
    bookHref: "https://msha.ke/thewhiteninglab",
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
    bookHref: "https://msha.ke/thewhiteninglab",
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
    bookHref: "https://msha.ke/thewhiteninglab",
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
    bookHref: "https://msha.ke/thewhiteninglab",
  },
];

function Services() {
  return (
    <section id="services" className="px-6 pt-14 pb-6 md:pt-16 md:pb-8 border-t border-border">
      <div className="max-w-[820px] mx-auto">
        <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Services / In-Lab Treatments
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
              Pick Your <span className="text-primary">Treatment.</span>
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
                        <span className="text-muted-foreground">+</span>
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
      <div className="max-w-[820px] mx-auto">
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
        <div className="grid gap-4">
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
  const variants = node.variants.edges.map((e) => e.node);

  // Initialize selected options from the first available variant
  const initialVariant = variants.find((v) => v.availableForSale) ?? variants[0];
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    initialVariant?.selectedOptions?.forEach((o) => {
      init[o.name] = o.value;
    });
    return init;
  });
  const [openOptions, setOpenOptions] = useState<Record<string, boolean>>({});

  const matchedVariant =
    variants.find((v) =>
      v.selectedOptions.every((o) => selectedOptions[o.name] === o.value),
    ) ?? initialVariant;

  const image = node.images.edges[0]?.node;
  const price = matchedVariant?.price ?? node.priceRange.minVariantPrice;
  const hasOptions = node.options?.some((o) => o.values.length > 1);

  const handleAdd = async () => {
    if (!matchedVariant) return;
    setAdding(true);
    try {
      await addItem({
        product,
        variantId: matchedVariant.id,
        variantTitle: matchedVariant.title,
        price: matchedVariant.price,
        quantity: 1,
        selectedOptions: matchedVariant.selectedOptions || [],
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
      {hasOptions && (
        <div className="space-y-2 mb-4">
          {node.options
            .filter((opt) => opt.values.length > 1)
            .map((opt) => {
              const isOpen = openOptions[opt.name] ?? false;
              const current = selectedOptions[opt.name];
              return (
                <div key={opt.name} className="border border-border rounded-sm">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenOptions((prev) => ({ ...prev, [opt.name]: !isOpen }))
                    }
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-widest hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-muted-foreground">
                      {opt.name}: <span className="text-foreground">{current}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>
                  {isOpen && (
                    <div className="flex flex-wrap gap-2 px-3 pb-3 pt-1">
                      {opt.values.map((val) => {
                        const active = selectedOptions[opt.name] === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() =>
                              setSelectedOptions((prev) => ({ ...prev, [opt.name]: val }))
                            }
                            className={`min-w-[2.5rem] px-3 py-1.5 border font-mono text-[10px] uppercase tracking-widest rounded-sm transition-colors ${
                              active
                                ? "bg-foreground text-background border-foreground"
                                : "border-border hover:border-foreground"
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
      <button
        onClick={handleAdd}
        disabled={!matchedVariant?.availableForSale || adding || isLoading}
        className="w-full border border-foreground py-3 font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-foreground hover:text-background active:scale-[0.99] transition-all rounded-sm disabled:opacity-50 inline-flex items-center justify-center gap-2"
      >
        {adding ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : matchedVariant?.availableForSale ? (
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
    <section id="shop" className="px-6 pt-10 pb-14 md:pt-12 md:pb-16 border-t border-border">
      <div className="max-w-[820px] mx-auto">
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
          <div className="grid grid-cols-1 gap-8 md:gap-12">
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
    <section id="no-filters" className="px-5 py-12 sm:px-6 sm:py-16 md:py-20 bg-foreground text-background">
      <div className="max-w-[820px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-12 gap-4 md:gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-3 sm:mb-4">
              No Filters / Lab Archive
            </p>
            <h2 className="font-display text-[2.25rem] leading-[0.95] sm:text-6xl md:text-7xl uppercase tracking-tighter">
              Real lab results.
              <br />
              No retouching.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-background/60 max-w-[28ch]">
            Tap an image to reveal after results.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {noFilters.map((n) => (
            <NoFilterCard key={n.patient} item={n} />
          ))}
        </div>
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-4 border-t border-background/15 pt-8">
          <p className="font-display text-2xl sm:text-3xl uppercase tracking-tighter leading-[0.95] max-w-[24ch]">
            This is just a <span className="text-primary">taste.</span>
          </p>
          <a
            href="https://www.instagram.com/thewhiteninglabco"
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

const testimonials = [
  {
    quote:
      "I have extreme sensitivity and was nervous, but I had zero pain during or after. The results blew me away.",
    stars: 5,
  },
  {
    quote:
      "Transformative. Hands down the best self-care investment I've made — the space is beautiful and the team is so dialed in.",
    stars: 5,
  },
  {
    quote:
      "Quick, painless, and my teeth look incredible. I've tried strips and trays for years — nothing comes close.",
    stars: 5,
  },
  {
    quote:
      "I'm a dental professional and I've never had results this good from any whitening treatment. Truly impressed.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section
      aria-label="Client reviews"
      className="px-5 py-12 sm:px-6 sm:py-16 border-t border-border bg-background"
    >
      <div className="max-w-[820px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-6 mb-10 sm:mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4">
              Verified Google Reviews
            </p>
            <h2 className="font-display text-[2.25rem] leading-[0.95] sm:text-5xl md:text-6xl uppercase tracking-tighter">
              Real <span className="text-primary">WORDS.</span>
              <br />
              Real <span className="text-primary">CLIENTS.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=the+whitening+lab+maine+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Read all reviews on Google →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="border border-border rounded-sm p-5 sm:p-6 flex flex-col gap-4 bg-card"
            >
              <div
                className="text-black no-text-outline font-mono text-sm tracking-widest"
                aria-label={`${t.stars} out of 5 stars`}
              >
                {"★".repeat(t.stars)}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Verified · Google
              </figcaption>
            </figure>
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
  const [showAfter, setShowAfter] = useState(false);
  return (
    <figure className="group">
      <button
        type="button"
        onClick={() => setShowAfter((v) => !v)}
        onPointerEnter={(e) => { if (e.pointerType === "mouse") setShowAfter(true); }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") setShowAfter(false); }}
        aria-label={`Toggle before and after for ${item.patient}`}
        aria-pressed={showAfter}
        className="relative block w-full overflow-hidden rounded-sm border border-background/15 aspect-[4/5] bg-black outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <img
          src={item.before}
          alt={`${item.patient} before whitening`}
          loading="lazy"
          width={800}
          height={1024}
          className="absolute inset-0 w-full h-full object-contain"
        />
        <img
          src={item.after}
          alt={`${item.patient} after whitening`}
          loading="lazy"
          width={800}
          height={1024}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
        />
        <span className={`absolute top-3 left-3 px-2 py-1 bg-background text-foreground font-mono text-[9px] uppercase tracking-widest transition-opacity ${showAfter ? "opacity-0" : "opacity-100"}`}>
          Before
        </span>
        <span className={`absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-widest transition-opacity ${showAfter ? "opacity-100" : "opacity-0"}`}>
          After
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-1 bg-background/90 text-foreground font-mono text-[9px] uppercase tracking-widest">
          {item.shades}
        </span>
      </button>
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
      className="bg-background py-12 md:py-16"
    >
      <div className="w-full bg-primary text-primary-foreground px-5 py-16 sm:px-6 sm:py-20 md:py-24 text-center">
        <div className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
          Our Promise
        </div>
        <blockquote
          className="manifesto-headline mx-auto max-w-[820px] font-display uppercase tracking-tighter mb-8 text-balance"
          style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: 0.9 }}
        >
          We don't fake results. We create them clinically.
        </blockquote>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-foreground text-background px-8 py-4 font-mono text-xs md:text-sm uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all"
        >
          Book a Treatment
        </a>
      </div>
    </section>
  );
}

function Pros() {
  return (
    <section id="process" className="px-5 pt-8 pb-10 sm:px-6 md:pt-10 md:pb-12">
      <div className="max-w-[820px] mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 items-center">
          <img
            src={team}
            alt="The The Whitening Lab clinical team — three licensed / certified dental professionals in black scrubs"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full aspect-square object-cover object-top rounded-sm"
          />
          <div>
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.4em] text-foreground font-bold mb-6 inline-block border-b-2 border-foreground pb-2">
              Meet the team
            </p>
            <h3 className="font-sans text-3xl leading-snug tracking-normal mb-6 text-pretty font-semibold sm:text-4xl max-w-[26ch]">
              At The Whitening Lab, we do one thing and do it best: professional teeth whitening. Our expertise guarantees a safe, precise, and elevated experience.
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10 text-pretty max-w-[55ch]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold mr-2">Est. 2022</span>
              Built by dental pros, for the smile-obsessed. A dental lab tech and a hygienist — same question on repeat: <em>how are your teeth so white?</em> So we rewrote the playbook. The dental lab became <span className="font-semibold text-foreground">The Whitening Lab</span> — the new standard in professional teeth whitening, changing the world one smile at a time.
            </p>
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
  const [submitting, setSubmitting] = useState(false);
  return (
    <section id="partner" className="px-6 pt-4 pb-10 md:pt-6 md:pb-12 bg-background">
      <div className="max-w-[820px] mx-auto">
        <div className="grid grid-cols-1 gap-10 items-start">
          <div>
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
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              const form = e.currentTarget;
              const fd = new FormData(form);
              const get = (k: string) => String(fd.get(k) ?? "").trim();
              const interests = fd.getAll("interest").map(String);
              setSubmitting(true);
              const { error } = await supabase.from("partner_inquiries").insert({
                full_name: get("name"),
                company: get("company"),
                email: get("email"),
                phone: get("phone") || null,
                experience: get("experience") || null,
                location: get("location") || null,
                interests,
                message: get("message") || null,
              });
              setSubmitting(false);
              if (error) {
                toast.error("Something went wrong. Please try again.");
                return;
              }
              toast.success("Thanks! We'll be in touch soon.");
              form.reset();
            }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              aria-label="Full name"
              maxLength={100}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              required
              type="text"
              name="company"
              placeholder="Company / Practice"
              aria-label="Company or practice"
              maxLength={150}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              maxLength={255}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              aria-label="Phone"
              maxLength={30}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              aria-label="Years of experience"
              maxLength={50}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <input
              type="text"
              name="location"
              placeholder="Location / Where You'd Practice"
              aria-label="Location"
              maxLength={150}
              className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            />
            <div className="sm:col-span-2 flex flex-wrap gap-x-6 gap-y-2 px-1 py-1 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-muted-foreground mr-2">Interested in:</span>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="interest" value="Training" className="accent-primary" /> Training
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="interest" value="Wholesale" className="accent-primary" /> Wholesale
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="interest" value="In-House Lab" className="accent-primary" /> In-House Lab
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="interest" value="Affiliate Office" className="accent-primary" /> Affiliate Office
              </label>
            </div>
            <textarea
              name="message"
              placeholder="Tell us a bit more (optional)"
              aria-label="Message"
              rows={3}
              maxLength={1000}
              className="sm:col-span-2 bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono uppercase tracking-wide outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Let's Connect"}
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
    a: "No. Our peroxide-based gels are clinically formulated and applied by licensed / certified pros to lift stains from the surface and within the enamel — without weakening tooth structure. Sensitivity, if any, is temporary.",
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
    <section id="faq" className="px-6 pt-10 pb-14 md:pt-12 md:pb-16 border-t border-border bg-background">
      <div className="max-w-[820px] mx-auto">
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
    <footer className="bg-foreground text-background pt-16 pb-10 px-6">
      <div className="max-w-[820px] mx-auto">
        <div className="grid gap-12 mb-24">
          <div>
            <span className="font-display text-4xl uppercase tracking-tighter">
              The Whitening Lab
            </span>
            <p className="mt-4 text-stone-400 max-w-[24ch] text-sm">
              The definitive standard in modern teeth whitening. Operated by licensed / certified
              dental pros.
            </p>
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-3">
                Follow the Lab
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/thewhiteninglabco", label: "Instagram" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@thewhiteninglabco", label: "TikTok" },
                  { Icon: Youtube, href: "https://www.youtube.com/@TheWhiteningLabCo", label: "YouTube" },
                  { Icon: Facebook, href: "https://www.facebook.com/share/1BC3zFw8g4/?mibextid=wwXIfr", label: "Facebook" },
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
              <a
                href="https://share.google/53AdeOYKXHHpam0yK"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-primary transition-colors"
              >
                <span aria-hidden className="grid place-items-center size-5 rounded-full bg-primary text-primary-foreground font-bold text-[11px]">G</span>
                Reviews on Google →
              </a>
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
              <li><Link to="/welcome-packet" className="hover:text-primary transition-colors">Welcome Packet</Link></li>
              <li><Link to="/aftercare" className="hover:text-primary transition-colors">Aftercare Instructions</Link></li>
              <li><Link to="/referrals" className="hover:text-primary transition-colors">Referral Program</Link></li>
              <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Team</a></li>
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
          <div className="flex flex-col gap-1">
            <span>© 2026 The Whitening Lab Clinical LLC</span>
            <a href="https://maps.google.com/?q=15+Main+St+Suite+107+Gray+Maine+04039" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">15 Main St. Suite 107, Gray, Maine 04039</a>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+12076502622" className="hover:text-background transition-colors">207-650-2622</a>
            <a href="mailto:thewhiteninglabco@gmail.com" className="hover:text-background transition-colors normal-case tracking-normal">thewhiteninglabco@gmail.com</a>
            <a href="/privacy" className="hover:text-background transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-background transition-colors">Terms</a>
            <a href="/accessibility" className="hover:text-background transition-colors">Accessibility</a>
          </div>
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
      <NoFiltersGallery />
      <Testimonials />
      <Manifesto />
      <Pros />
      <Shop />
      <Partner />
      <FAQ />
      <Footer />
      <a
        href="https://msha.ke/thewhiteninglab"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 inset-x-4 z-40 text-center px-5 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest shadow-2xl rounded-sm hover:opacity-90 transition-opacity"
      >
        Book Now →
      </a>

    </main>
  );
}
