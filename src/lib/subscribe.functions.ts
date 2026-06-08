import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SubscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
});

const AUDIENCE_ID = "cc527d4f-f01d-414f-8297-9fb270ab7bca";

export const subscribeEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("Email service is not configured.");
    }

    // 1) Add contact to Resend audience (best-effort).
    try {
      await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, unsubscribed: false }),
      });
    } catch (e) {
      console.error("Resend audience add failed (non-fatal):", e);
    }

    // 2) Notify the shop inbox.
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Whitening Lab <onboarding@resend.dev>",
          to: ["thewhiteninglabco@gmail.com"],
          subject: `New newsletter signup: ${data.email}`,
          text: `New subscriber: ${data.email}`,
        }),
      });
    } catch (e) {
      console.error("Subscribe notification email failed:", e);
    }

    return { ok: true as const };
  });
