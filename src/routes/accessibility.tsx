import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — The Whitening Lab" },
      { name: "description", content: "Our commitment to making The Whitening Lab accessible to everyone." },
      { property: "og:title", content: "Accessibility — The Whitening Lab" },
      { property: "og:description", content: "Our commitment to making The Whitening Lab accessible to everyone." },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Accessibility Statement" updated="May 2026">
      <p>
        The Whitening Lab is committed to making our website and studio welcoming and usable for
        everyone, including people with disabilities.
      </p>

      <H2>Our standard</H2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes
        readable type sizes, sufficient color contrast, alt text on meaningful images, keyboard
        navigation, and screen-reader-friendly markup.
      </p>

      <H2>In the studio</H2>
      <p>
        Our Gray, Maine location is ground-floor and step-free. If you have specific access needs
        for your appointment — quieter environment, extra time, mobility assistance — let us know
        when you book and we will accommodate.
      </p>

      <H2>Found a problem?</H2>
      <p>
        If any part of our site or service is hard for you to use, we want to hear about it. Email{" "}
        <a className="underline" href="mailto:thewhiteninglabco@gmail.com">
          thewhiteninglabco@gmail.com
        </a>{" "}
        or call 207-650-2622 with the page or issue, and we will work to fix it.
      </p>

      <H2>Ongoing work</H2>
      <p>
        Accessibility is never finished. We review our site regularly and improve it as we learn
        from real users.
      </p>
    </LegalLayout>
  );
}
