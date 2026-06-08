import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SubPageLayout, SubSection } from "@/components/SubPageLayout";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us Today!" },
      {
        name: "description",
        content:
          "Contact The Whitening Lab for clinically guided whitening and professional oral care. Connect with licensed / certified dental professionals via call, email, or form. We look forward to assisting you!",
      },
      { property: "og:title", content: "Contact Us | The Whitening Lab" },
      {
        property: "og:description",
        content:
          "Call, email, or message The Whitening Lab in Gray & Alfred, Maine. Licensed / certified dental professionals ready to help.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.thewhiteninglab.co/contact-us" },
    ],
    links: [
      { rel: "canonical", href: "https://www.thewhiteninglab.co/contact-us" },
    ],
  }),
  component: ContactUsPage,
});

function ContactUsPage() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <SubPageLayout
      eyebrow="Get In Touch"
      title={<>Contact <span className="text-primary">Us</span></>}
      intro="Questions about whitening, booking, or referrals? Reach out — a real human from our licensed dental team will get back to you."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <SubSection eyebrow="Gray, ME" heading="Greater Portland Studio">
          <p className="font-bold uppercase">15 Main St. Suite 107</p>
          <p>Gray, ME 04039</p>
          <p>
            <a href="tel:+12076502622" className="underline underline-offset-4 hover:text-primary">207-650-2622</a>
          </p>
        </SubSection>
        <SubSection eyebrow="Alfred, ME" heading="Southern Maine Studio">
          <p className="font-bold uppercase">12 Waterboro Rd</p>
          <p>Alfred, ME 04002</p>
          <p>
            <a href="tel:+12074940333" className="underline underline-offset-4 hover:text-primary">207-494-0333</a>
          </p>
          <p className="text-sm text-muted-foreground">By appointment only</p>
        </SubSection>
      </div>

      <SubSection eyebrow="Email" heading="Drop Us a Line">
        <p>
          <a href="mailto:thewhiteninglabco@gmail.com" className="underline underline-offset-4 hover:text-primary">
            thewhiteninglabco@gmail.com
          </a>
        </p>
      </SubSection>

      <SubSection eyebrow="Message Us" heading="Send a Direct Note">
        {status === "success" ? (
          <div className="border border-primary bg-primary/5 p-6 rounded-sm">
            <p className="font-display text-2xl uppercase tracking-tight mb-2">Message sent.</p>
            <p>Thanks — we'll get back to you shortly at the email you provided.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 bg-primary text-primary-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all rounded-sm"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              setStatus("loading");
              setErrorMsg("");
              try {
                await send({
                  data: {
                    name: String(fd.get("name") ?? "").trim(),
                    email: String(fd.get("email") ?? "").trim(),
                    phone: String(fd.get("phone") ?? "").trim() || null,
                    message: String(fd.get("message") ?? "").trim(),
                  },
                });
                form.reset();
                setStatus("success");
              } catch (err) {
                setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
                setStatus("error");
              }
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <input name="name" required placeholder="NAME" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <input name="email" type="email" required placeholder="EMAIL" className="bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <input name="phone" placeholder="PHONE (OPTIONAL)" className="sm:col-span-2 bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <textarea name="message" required rows={5} placeholder="MESSAGE" className="sm:col-span-2 bg-background border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />
            {status === "error" ? (
              <p className="sm:col-span-2 text-sm text-destructive font-mono uppercase tracking-widest">{errorMsg}</p>
            ) : null}
            <button
              type="submit"
              disabled={status === "loading"}
              className="sm:col-span-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:brightness-110 active:scale-[0.99] transition-all rounded-sm disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </SubSection>
    </SubPageLayout>
  );
}
