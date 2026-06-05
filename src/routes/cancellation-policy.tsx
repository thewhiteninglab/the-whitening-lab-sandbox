import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "The Whitening Lab | Cancellation Policy" },
      {
        name: "description",
        content:
          "Review The Whitening Lab's policy for clinically guided whitening appointments. A 48-hour notice is required for rescheduling or cancellations of professional oral care services.",
      },
      { property: "og:title", content: "Cancellation Policy | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "48-hour notice required to reschedule or cancel a clinically guided whitening appointment at The Whitening Lab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/cancellation-policy" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/cancellation-policy" },
    ],
  }),
  component: CancellationPolicyPage,
});

const policyItems = [
  {
    n: "01",
    eyebrow: "Inside 48 Hours",
    heading: "Cancellations or reschedules made within 48 hours of your appointment are charged 50% of the service total.",
    body: "At that window we cannot realistically rebook the chair.",
  },
  {
    n: "02",
    eyebrow: "Inside 24 Hours, No-Show, No-Call",
    heading: "Cancellations inside the 24-hour window, no-shows, and no-calls are charged 100% of the service total.",
    body: "A $75 rescheduling fee applies to book your next appointment.",
  },
  {
    n: "03",
    eyebrow: "At Our Discretion",
    heading: "Life happens.",
    body: "The $75 rescheduling fee may be waived at the studio's discretion. Reach out, be straight with us, and we'll do our best to work with you.",
  },
  {
    n: "04",
    eyebrow: "Running Late",
    heading: "A 15-minute grace period applies.",
    body: "Past that, we may need to shorten or reschedule your treatment so the next patient isn't pushed back.",
  },
  {
    n: "05",
    eyebrow: "How to Cancel or Reschedule",
    heading: "Use the link in your confirmation email, or email the studio directly at thewhiteninglabco@gmail.com.",
    body: "A voicemail counts only if left before the window closes.",
  },
];

function CancellationPolicyPage() {
  return (
    <SubPageLayout
      eyebrow="Studio Policy"
      title={<>Cancellation <span className="text-primary">Policy</span></>}
      intro="A note before you book. Your chair is held for you. Please give it the same courtesy."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {policyItems.map((item) => (
          <div key={item.n} className="border border-border rounded-sm p-5 bg-background">
            <p className="mb-2"><span className="label-pill font-mono text-xs font-bold">{item.n}</span></p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {item.eyebrow}
            </p>
            <p className="font-bold uppercase text-sm mb-2">{item.heading}</p>
            <p className="text-sm text-foreground/80">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="border border-primary rounded-sm p-6 md:p-8 bg-primary/5">
        <p className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-[0.95]">
          "Hold the time, keep the time. Simple as that."{" "}
          <span className="text-primary">— House Rule</span>
        </p>
      </div>

      <p className="text-sm text-muted-foreground">
        Policy effective 2026. Subject to update at the studio's discretion.
      </p>
    </SubPageLayout>
  );
}
