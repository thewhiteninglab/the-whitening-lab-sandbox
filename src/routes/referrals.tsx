import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";
import { submitReferral } from "@/lib/referrals.functions";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Patient Referral | The Whitening Lab" },
      {
        name: "description",
        content:
          "Dental professionals: refer a patient to The Whitening Lab for clinically guided whitening. Send them over — we'll take it from here.",
      },
      { property: "og:title", content: "Patient Referral | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Referral form for dental offices. Licensed clinical providers, dental lab–level whitening protocols.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/referrals" },
    ],
    links: [{ rel: "canonical", href: "https://www.thewhiteninglab.co/referrals" }],
  }),
  component: ReferralsPage,
});

const REASONS = [
  "Chief Complaint",
  "Restorative Work",
  "Post-Orthodontic",
  "Other",
] as const;

const FAQS = [
  { q: "How long is a session?", a: "About an hour, start to finish." },
  { q: "Who performs the treatment?", a: "Licensed clinical providers, every session." },
  {
    q: "Will it cause sensitivity?",
    a: "It can. We recommend Sensodyne before and after; OTC relief handles the rest.",
  },
  {
    q: "Will it damage enamel?",
    a: "No. Professional application protects enamel and reduces risk versus drugstore strips.",
  },
  {
    q: "Does it work on crowns, veneers, bonding?",
    a: "We lift surface stains, but restorations don't change shade. Plan whitening first.",
  },
  {
    q: "How long do results last?",
    a: "Several months to a year with diet care, cleanings, and the occasional touch-up.",
  },
  {
    q: "Aftercare?",
    a: "Skip stain-heavy food, drink, and smoking for 48 hours. Use a straw when possible.",
  },
  { q: "Booking?", a: "thewhiteninglab.co · thewhiteninglabco@gmail.com" },
];

const inputCls =
  "bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary";

function ReferralsPage() {
  const submit = useServerFn(submitReferral);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      await submit({
        data: {
          patient_name: String(fd.get("patient_name") ?? "").trim(),
          phone_number: String(fd.get("phone_number") ?? "").trim(),
          date_of_referral: String(fd.get("date_of_referral") ?? "").trim(),
          referring_provider: String(fd.get("referring_provider") ?? "").trim(),
          practice_office: String(fd.get("practice_office") ?? "").trim(),
          reason_for_referral: String(fd.get("reason_for_referral") ?? "") as
            (typeof REASONS)[number],
          notes: String(fd.get("notes") ?? "").trim() || null,
        },
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <SubPageLayout
      eyebrow="For Dental Professionals"
      title={
        <>
          Patient <span className="text-primary">Referral</span>
        </>
      }
      intro="Send them over. We'll take it from here. A referral from your office to The Whitening Lab — licensed clinical providers, dental lab–level whitening protocols."
    >
      <SubSection eyebrow="Submit Referral" heading="Patient & Practice Details">
        {status === "success" ? (
          <div className="border border-primary bg-primary/5 p-6 rounded-sm space-y-3">
            <p className="font-display text-2xl uppercase tracking-tight">Referral received.</p>
            <p>
              Thank you. We've logged the referral and our team will reach out to the patient
              directly to schedule. A confirmation has been sent to{" "}
              <a
                href="mailto:thewhiteninglabco@gmail.com"
                className="underline underline-offset-4 hover:text-primary"
              >
                thewhiteninglabco@gmail.com
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 bg-primary text-primary-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all rounded-sm"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <input name="patient_name" required maxLength={200} placeholder="PATIENT NAME" className={inputCls} />
            <input name="phone_number" required maxLength={40} placeholder="PHONE NUMBER" className={inputCls} />

            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Date of Referral
              </span>
              <input
                name="date_of_referral"
                type="date"
                required
                defaultValue={today}
                className={inputCls}
              />
            </label>

            <label className="flex flex-col gap-1 sm:col-span-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Reason for Referral
              </span>
              <select name="reason_for_referral" required defaultValue="" className={inputCls}>
                <option value="" disabled>
                  SELECT ONE
                </option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <input
              name="referring_provider"
              required
              maxLength={200}
              placeholder="REFERRING PROVIDER"
              className={inputCls}
            />
            <input
              name="practice_office"
              required
              maxLength={200}
              placeholder="PRACTICE / OFFICE"
              className={inputCls}
            />

            <textarea
              name="notes"
              rows={5}
              maxLength={4000}
              placeholder="NOTES (OPTIONAL)"
              className={`sm:col-span-2 resize-none ${inputCls}`}
            />

            {status === "error" ? (
              <p className="sm:col-span-2 text-sm text-destructive font-mono uppercase tracking-widest">
                {errorMsg}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all rounded-sm disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "Send Referral"}
            </button>
          </form>
        )}
      </SubSection>

      <SubSection eyebrow="Two Locations" heading="Where We Treat">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Greater Portland
            </p>
            <p className="font-bold uppercase">15 Main St., Suite 7</p>
            <p>Gray, Maine</p>
            <p className="mt-2">
              <a href="tel:+12076502622" className="underline underline-offset-4 hover:text-primary">
                207-650-2622
              </a>
            </p>
          </div>
          <div className="border border-border rounded-sm p-5 bg-background">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Southern Maine
            </p>
            <p className="font-bold uppercase">Inside The Wellnest</p>
            <p>12 Waterboro Rd., Alfred, Maine 04002</p>
            <p className="mt-2">
              <a href="tel:+12074940333" className="underline underline-offset-4 hover:text-primary">
                207-494-0333
              </a>
            </p>
          </div>
        </div>
      </SubSection>

      <SubSection eyebrow="FAQ" heading="For Referring Providers">
        <div className="divide-y divide-border border border-border rounded-sm bg-background">
          {FAQS.map((f) => (
            <div key={f.q} className="p-5">
              <p className="font-display text-lg uppercase tracking-tight mb-1">{f.q}</p>
              <p className="text-foreground/85">{f.a}</p>
            </div>
          ))}
        </div>
      </SubSection>

      <div className="border-l-2 border-primary pl-5 py-3">
        <p className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight">
          "We handle the whitening. You keep the relationship."
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
          — House Rule
        </p>
      </div>
    </SubPageLayout>
  );
}
