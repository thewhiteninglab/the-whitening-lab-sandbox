import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Referrals | The Whitening Lab" },
      {
        name: "description",
        content:
          "Contact The Whitening Lab Co. for clinical whitening referrals. Connect with licensed dental professionals using dental lab–level oral care protocols. Submit your details today!",
      },
      { property: "og:title", content: "Referrals | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Dentist referral form for The Whitening Lab. For dentist use only.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/referrals" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/referrals" },
    ],
  }),
  component: ReferralsPage,
});

function ReferralsPage() {
  return (
    <SubPageLayout
      eyebrow="For Dental Professionals"
      title={<>Referral Form <span className="text-primary">(For dentist use only)</span></>}
      intro="Refer a patient to The Whitening Lab for clinically guided whitening using dental lab–level protocols. Submit the details below and our team will coordinate scheduling directly with your patient."
    >
      <SubSection eyebrow="Submit Referral" heading="Patient & Practice Details">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent(`Referral from ${data.get("practice") ?? "dentist"}`);
            const lines = [
              `Referring Dentist: ${data.get("dentist") ?? ""}`,
              `Practice: ${data.get("practice") ?? ""}`,
              `Practice Phone: ${data.get("practicePhone") ?? ""}`,
              `Practice Email: ${data.get("practiceEmail") ?? ""}`,
              ``,
              `Patient Name: ${data.get("patientName") ?? ""}`,
              `Patient Phone: ${data.get("patientPhone") ?? ""}`,
              `Patient Email: ${data.get("patientEmail") ?? ""}`,
              ``,
              `Reason for Referral / Notes:`,
              `${data.get("notes") ?? ""}`,
            ];
            const body = encodeURIComponent(lines.join("\n"));
            window.location.href = `mailto:thewhiteninglabco@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <input name="dentist" required placeholder="REFERRING DENTIST NAME" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="practice" required placeholder="PRACTICE NAME" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="practicePhone" required placeholder="PRACTICE PHONE" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="practiceEmail" type="email" required placeholder="PRACTICE EMAIL" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />

          <input name="patientName" required placeholder="PATIENT NAME" className="sm:col-span-2 bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="patientPhone" required placeholder="PATIENT PHONE" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="patientEmail" type="email" placeholder="PATIENT EMAIL (OPTIONAL)" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />

          <textarea name="notes" rows={5} placeholder="REFERRAL NOTES" className="sm:col-span-2 bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />

          <button
            type="submit"
            className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all rounded-sm"
          >
            Submit Referral
          </button>
        </form>
        <p className="text-sm text-muted-foreground pt-4">
          [CONFIRM: original referral form fields & destination — current form opens an email draft to thewhiteninglabco@gmail.com]
        </p>
      </SubSection>
    </SubPageLayout>
  );
}
