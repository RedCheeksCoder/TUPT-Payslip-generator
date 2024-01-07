import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xoqtidgnodbkouzbtmcd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcXRpZGdub2Ria291emJ0bWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyOTY3MzIsImV4cCI6MjAxOTg3MjczMn0.mTm4uwp74a4MAOeh4s-3eyld0JhCVWPFnq3OQCY-qMc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
