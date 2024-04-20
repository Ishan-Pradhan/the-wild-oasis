import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mkzkigvinxxwwtvmlhlr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1remtpZ3Zpbnh4d3d0dm1saGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MDc4NDIsImV4cCI6MjAyODk4Mzg0Mn0.3G6UpSJ2fd7BPZbuYVnBBxUeqkBBdmp2K8ti0PkLgzk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
