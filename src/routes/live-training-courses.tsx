import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";

export const Route = createFileRoute("/live-training-courses")({
  head: () => ({
    meta: [
      { title: "Live Training Courses | The Whitening Lab — Gray & Alfred, Maine" },
      {
        name: "description",
        content:
          "Live whitening training from The Whitening Lab Co — a leading oral care provider in Gray & Alfred, ME, specializing in clinically guided teeth whitening by licensed dental professionals.",
      },
      { property: "og:title", content: "Live Training Courses | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Hands-on whitening training led by licensed dental professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/live-training-courses" },
    ],
    links: [{ rel: "canonical", href: "https://www.thewhiteninglab.co/live-training-courses" }],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <SubPageLayout
      eyebrow="Hands-On Education"
      title={<>Live Training <span className="text-primary">Courses.</span></>}
      intro="Learn clinically guided whitening protocols directly from licensed dental professionals with 32+ years of experience — dental lab–level technique, taught live."
    >
      <SubSection eyebrow="What You'll Learn" heading="Course Curriculum">
        <ul className="space-y-3 list-disc pl-5">
          <li>Patient assessment & staging deep-set stains.</li>
          <li>Safe application protocols and chair-side technique.</li>
          <li>Maintenance & aftercare to protect long-term results.</li>
          <li>Adding whitening as a revenue stream to your practice.</li>
        </ul>
      </SubSection>
      <SubSection eyebrow="Enroll" heading="Reserve Your Seat">
        <p>Course schedules fill quickly. Contact us for upcoming dates, pricing, and location options.</p>
        <Link
          to="/contact-us"
          className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded-sm"
        >
          Request Course Info
        </Link>
      </SubSection>
    </SubPageLayout>
  );
}
