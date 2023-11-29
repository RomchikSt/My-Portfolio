import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mmebmspcnrijlfvfkuvn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tZWJtc3BjbnJpamxmdmZrdXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MDAzOTYsImV4cCI6MjAxMDE3NjM5Nn0.pjFyTWMPgmvdey_yejtLX_uVz_-ut017KXGyRUldIOc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
