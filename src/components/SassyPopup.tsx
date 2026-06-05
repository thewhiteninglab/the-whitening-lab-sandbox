import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "sassy-popup-dismissed";

export function SassyPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sassy-popup-title"
      onClick={dismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-background text-foreground rounded-sm border border-foreground/10 shadow-2xl p-8 animate-scale-in"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-1 text-foreground/60 hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary no-text-outline mb-3">
          Real Talk
        </p>
        <h2
          id="sassy-popup-title"
          className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-3"
        >
          Still rocking yellow teeth?
        </h2>
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
          Coffee, wine, and life happen. Book a session and walk out up to 12 shades whiter — no AI, no gimmicks.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://msha.ke/thewhiteninglab"
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 text-center px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Fix it → Book now
          </a>

          <button
            type="button"
            onClick={dismiss}
            className="px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors"
          >
            I'll stay yellow
          </button>
        </div>
      </div>
    </div>
  );
}
