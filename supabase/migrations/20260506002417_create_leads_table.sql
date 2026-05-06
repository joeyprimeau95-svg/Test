/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `budget` (text, optional)
      - `message` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `leads` table
    - Add policy for anon users to insert (public contact form)
    - No read access for public (only service role can read)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  company text DEFAULT '',
  budget text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
