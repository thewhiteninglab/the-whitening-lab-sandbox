CREATE TABLE public.partner_inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  experience text,
  location text,
  interests text[] NOT NULL DEFAULT '{}',
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.partner_inquiries TO anon;
GRANT SELECT, INSERT ON public.partner_inquiries TO authenticated;
GRANT ALL ON public.partner_inquiries TO service_role;

ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a partner inquiry"
  ON public.partner_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(full_name) BETWEEN 1 AND 100
    AND char_length(company) BETWEEN 1 AND 150
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (phone IS NULL OR char_length(phone) <= 30)
    AND (experience IS NULL OR char_length(experience) <= 50)
    AND (location IS NULL OR char_length(location) <= 150)
    AND (message IS NULL OR char_length(message) <= 1000)
    AND array_length(interests, 1) IS NULL OR array_length(interests, 1) <= 10
  );

CREATE POLICY "Authenticated users can view partner inquiries"
  ON public.partner_inquiries
  FOR SELECT
  TO authenticated
  USING (true);