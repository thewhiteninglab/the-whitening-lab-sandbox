import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().toLowerCase().email().max(254),
  phone: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("Email service is not configured.");
    }

    const text = [
      `New website inquiry`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Whitening Lab <onboarding@resend.dev>",
        to: ["pethuelmutalenu@gmail.com"],
        reply_to: data.email,
        subject: `New Contact: ${data.name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Contact email failed:", res.status, await res.text());
      throw new Error("Could not send your message. Please try again.");
    }

    return { ok: true as const };
  });
