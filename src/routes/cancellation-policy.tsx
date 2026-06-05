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

function CancellationPolicyPage() {
  return (
    <SubPageLayout
      eyebrow="Studio Policy"
      title={<>Cancellation <span className="text-primary">Policy</span></>}
      intro="Every appointment at The Whitening Lab is reserved exclusively for you and prepped by a licensed dental professional. Please review our notice requirements below."
    >
      <SubSection eyebrow="48-Hour Notice" heading="Rescheduling & Cancellations">
        <p>
          We require a minimum of <span className="font-bold">48 hours' notice</span> to reschedule
          or cancel any clinically guided whitening appointment. This window allows us to offer the
          slot to another client and ensures our licensed dental team is prepared for every session.
        </p>
      </SubSection>

      <SubSection eyebrow="Late Notice & No-Shows" heading="What Happens If You Miss the Window">
        <p>[CONFIRM: exact late-cancel / no-show fee or policy from current site]</p>
      </SubSection>

      <SubSection eyebrow="How to Cancel" heading="Contact the Studio">
        <p>
          Call{" "}
          <a href="tel:+12076502622" className="underline underline-offset-4 hover:text-primary">207-650-2622</a>
          {" "}or email{" "}
          <a href="mailto:thewhiteninglabco@gmail.com" className="underline underline-offset-4 hover:text-primary">
            thewhiteninglabco@gmail.com
          </a>
          {" "}as soon as you know you need to reschedule. We'll find a time that works.
        </p>
      </SubSection>

      <p className="text-sm text-muted-foreground">
        [CONFIRM: full cancellation policy wording from current site, including any deposit, late-fee, or rebooking terms]
      </p>
    </SubPageLayout>
  );
}
