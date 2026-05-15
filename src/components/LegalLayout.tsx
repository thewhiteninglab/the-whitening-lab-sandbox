import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
          ← The Whitening Lab
        </Link>
        <a
          href="https://book.thewhiteninglab.com/new-patient"
          className="font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Book Now
        </a>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight mb-3">{title}</h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          Last updated: {updated}
        </p>

        <div className="prose-legal space-y-8 text-[15px] leading-relaxed text-foreground/85">
          {children}
        </div>

        <div className="mt-20 pt-8 border-t border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
          <a href="tel:+12076502622" className="hover:text-foreground transition-colors">207-650-2622</a>
          <a href="mailto:thewhiteninglabco@gmail.com" className="hover:text-foreground transition-colors normal-case tracking-normal">thewhiteninglabco@gmail.com</a>
          <span>15 Main St. Suite 107, Gray, ME 04039</span>
        </div>
      </article>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-serif tracking-tight mt-10 mb-3 text-foreground">{children}</h2>
  );
}
