
CREATE TABLE public.referrals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  date_of_referral DATE NOT NULL,
  referring_provider TEXT NOT NULL,
  practice_office TEXT NOT NULL,
  reason_for_referral TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.referrals TO anon, authenticated;
GRANT ALL ON public.referrals TO service_role;

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a referral"
  ON public.referrals
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
