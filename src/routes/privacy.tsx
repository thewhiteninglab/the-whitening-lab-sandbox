import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Whitening Lab" },
      { name: "description", content: "How The Whitening Lab collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — The Whitening Lab" },
      { property: "og:description", content: "How The Whitening Lab collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="May 2026">
      <p>
        The Whitening Lab Clinical LLC ("we", "us", "our") respects your privacy. This policy
        explains what information we collect when you visit our website, book an appointment, or
        purchase a product, and how we use it.
      </p>

      <H2>Information we collect</H2>
      <p>
        When you book an appointment, contact us, or place an order, we collect details such as your
        name, email address, phone number, shipping address, and any health information you choose
        to share for treatment. When you browse our site, we collect basic technical data like your
        IP address, browser type, and pages viewed.
      </p>

      <H2>How we use it</H2>
      <p>
        We use your information to schedule and deliver treatments, fulfill orders, respond to
        questions, send appointment reminders, and improve our website. With your permission, we may
        send marketing emails about new products or promotions — you can unsubscribe at any time.
      </p>

      <H2>Sharing</H2>
      <p>
        We do not sell your personal information. We share data only with trusted service providers
        that help us run our business — payment processors, booking software, email tools, and
        analytics — and only as needed to provide the service.
      </p>

      <H2>Your rights</H2>
      <p>
        You can request a copy of the information we hold about you, ask us to correct it, or ask us
        to delete it. Email{" "}
        <a className="underline" href="mailto:thewhiteninglabco@gmail.com">
          thewhiteninglabco@gmail.com
        </a>{" "}
        and we will respond within 30 days.
      </p>

      <H2>Cookies</H2>
      <p>
        Our site uses cookies for essential functionality (like remembering items in your cart) and
        for analytics. You can disable cookies in your browser settings, but some parts of the site
        may not work as expected.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about this policy? Reach out at{" "}
        <a className="underline" href="mailto:thewhiteninglabco@gmail.com">
          thewhiteninglabco@gmail.com
        </a>{" "}
        or 207-650-2622.
      </p>
    </LegalLayout>
  );
}
