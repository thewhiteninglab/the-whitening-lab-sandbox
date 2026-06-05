import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const SUBPAGE_NAV = [
  { to: "/", label: "Home" },
  { to: "/greater-portland-location", label: "Gray" },
  { to: "/southern-maine-location", label: "Alfred" },
  { to: "/our-results", label: "Results" },
  { to: "/contact-us", label: "Contact" },
  { to: "/book-an-appointment", label: "Book" },
] as const;

export function SubPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between gap-4 px-6 py-4 bg-background border-b border-border">
        <Link to="/" className="font-display text-2xl md:text-3xl uppercase leading-none">
          The Whitening Lab
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {SUBPAGE_NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/book-an-appointment"
          className="bg-primary text-primary-foreground px-4 md:px-5 py-2.5 text-[11px] font-mono uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Book Now
        </Link>
      </nav>

      <header className="px-6 pt-14 md:pt-20 pb-10 md:pb-14 border-b border-border">
        <div className="max-w-5xl mx-auto">
          {eyebrow ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display uppercase leading-[0.95] tracking-tighter text-balance text-[clamp(2.5rem,8vw,6.5rem)]">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-[60ch] text-lg md:text-xl font-medium leading-snug text-foreground/85">
              {intro}
            </p>
          ) : null}
        </div>
      </header>

      <section className="px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto space-y-10 text-[15px] md:text-base leading-relaxed text-foreground/85">
          {children}
        </div>
      </section>

      <footer className="bg-foreground text-background px-6 py-12">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-3">Gray, ME</p>
            <a
              href="https://maps.google.com/?q=15+Main+St+Suite+107+Gray+Maine+04039"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-bold uppercase hover:text-primary transition-colors"
            >
              15 Main St. Suite 107
              <br />
              Gray, ME 04039
            </a>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-3">Alfred, ME</p>
            <p className="text-sm font-bold uppercase">[CONFIRM: Alfred street address]</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-3">Contact</p>
            <a href="tel:+12076502622" className="block text-sm font-bold hover:text-primary transition-colors">207-650-2622</a>
            <a href="mailto:thewhiteninglabco@gmail.com" className="block text-sm hover:text-primary transition-colors">thewhiteninglabco@gmail.com</a>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-stone-800 pt-6 font-mono text-[10px] text-stone-500 uppercase tracking-widest gap-4 flex-wrap">
          <span>© 2026 The Whitening Lab Clinical LLC</span>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms</Link>
            <Link to="/accessibility" className="hover:text-background transition-colors">Accessibility</Link>
            <Link to="/cancellation-policy" className="hover:text-background transition-colors">Cancellation</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function SubSection({
  eyebrow,
  heading,
  children,
}: {
  eyebrow?: string;
  heading?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      {eyebrow ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      {heading ? (
        <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-[0.95] text-foreground">
          {heading}
        </h2>
      ) : null}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
