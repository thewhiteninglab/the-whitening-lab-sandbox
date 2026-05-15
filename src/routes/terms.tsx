import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — The Whitening Lab" },
      { name: "description", content: "Terms governing use of The Whitening Lab website, services, and products." },
      { property: "og:title", content: "Terms of Service — The Whitening Lab" },
      { property: "og:description", content: "Terms governing use of The Whitening Lab website, services, and products." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="May 2026">
      <p>
        By using thewhiteninglab.com, booking an appointment, or buying a product from us, you
        agree to these terms. If you do not agree, please do not use the site or our services.
      </p>

      <H2>Services</H2>
      <p>
        The Whitening Lab provides cosmetic teeth whitening treatments and at-home whitening
        products. Our treatments are cosmetic only and are not a substitute for dental care. If you
        have dental concerns, please consult your dentist before booking.
      </p>

      <H2>Booking & cancellations</H2>
      <p>
        Appointments can be rescheduled or cancelled at no charge with at least 24 hours notice.
        Late cancellations or no-shows may be charged a fee equal to 50% of the booked service.
      </p>

      <H2>Results</H2>
      <p>
        Results vary based on the natural color of your teeth, lifestyle habits, and aftercare. We
        cannot guarantee a specific shade outcome. Before/after images on our site reflect real
        client results and are not retouched.
      </p>

      <H2>Products</H2>
      <p>
        Product orders are processed within 1–3 business days. Due to the nature of oral-care
        products, all sales are final once shipped. If your order arrives damaged, contact us within
        7 days for a replacement.
      </p>

      <H2>Eligibility</H2>
      <p>
        Our treatments are intended for adults 18+ and minors with guardian consent. You should not
        receive whitening treatment if you are pregnant or nursing, have active dental decay, or
        have severe gum disease.
      </p>

      <H2>Liability</H2>
      <p>
        To the maximum extent permitted by law, The Whitening Lab Clinical LLC is not liable for
        indirect, incidental, or consequential damages arising from use of our site, services, or
        products.
      </p>

      <H2>Changes</H2>
      <p>
        We may update these terms occasionally. Continued use of our site or services after changes
        means you accept the updated terms.
      </p>

      <H2>Contact</H2>
      <p>
        Questions? Email{" "}
        <a className="underline" href="mailto:thewhiteninglabco@gmail.com">
          thewhiteninglabco@gmail.com
        </a>{" "}
        or call 207-650-2622.
      </p>
    </LegalLayout>
  );
}
