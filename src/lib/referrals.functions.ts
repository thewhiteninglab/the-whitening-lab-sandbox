import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const REASON_OPTIONS = [
  "Chief Complaint",
  "Restorative Work",
  "Post-Orthodontic",
  "Other",
] as const;

const ReferralSchema = z.object({
  patient_name: z.string().trim().min(1).max(200),
  phone_number: z.string().trim().min(7).max(40),
  date_of_referral: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  referring_provider: z.string().trim().min(1).max(200),
  practice_office: z.string().trim().min(1).max(200),
  reason_for_referral: z.enum(REASON_OPTIONS),
  notes: z.string().trim().max(4000).optional().nullable(),
});

export const submitReferral = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ReferralSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("referrals").insert({
      patient_name: data.patient_name,
      phone_number: data.phone_number,
      date_of_referral: data.date_of_referral,
      referring_provider: data.referring_provider,
      practice_office: data.practice_office,
      reason_for_referral: data.reason_for_referral,
      notes: data.notes ?? null,
    });

    if (error) {
      console.error("Referral insert failed:", error);
      throw new Error("Failed to save referral. Please try again.");
    }

    // Best-effort email notification via Resend (only if configured).
    // Saving the referral always succeeds independently.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const body = [
          `New patient referral submitted`,
          ``,
          `Patient: ${data.patient_name}`,
          `Phone: ${data.phone_number}`,
          `Date of Referral: ${data.date_of_referral}`,
          `Referring Provider: ${data.referring_provider}`,
          `Practice / Office: ${data.practice_office}`,
          `Reason: ${data.reason_for_referral}`,
          ``,
          `Notes:`,
          data.notes || "(none)",
        ].join("\n");

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "The Whitening Lab <onboarding@resend.dev>",
            to: ["thewhiteninglabco@gmail.com"],
            subject: `New Referral: ${data.patient_name} (from ${data.practice_office})`,
            text: body,
          }),
        });
      } catch (e) {
        console.error("Referral email notification failed (non-fatal):", e);
      }
    }

    return { ok: true as const };
  });
