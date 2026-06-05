
DROP POLICY IF EXISTS "Anyone can submit a referral" ON public.referrals;
REVOKE INSERT ON public.referrals FROM anon, authenticated;
