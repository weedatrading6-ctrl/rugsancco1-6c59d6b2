CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 40),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  service TEXT NOT NULL CHECK (char_length(service) BETWEEN 2 AND 100),
  project_description TEXT NOT NULL CHECK (char_length(project_description) BETWEEN 10 AND 3000),
  language TEXT NOT NULL DEFAULT 'so' CHECK (language IN ('so', 'en', 'ar')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;