import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://mkzkigvinxxwwtvmlhlr.supabase.co";
export const supabaseUrl = "https://pkhtayqigdbmvnbcdqop.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraHRheXFpZ2RibXZuYmNkcW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Nzg3MTEsImV4cCI6MjA1NzI1NDcxMX0.3Ov9gaXHKqzS_eIn6aOLYlhJ1hvGRYJlGd7G3PaW2TI ";
// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1remtpZ3Zpbnh4d3d0dm1saGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MDc4NDIsImV4cCI6MjAyODk4Mzg0Mn0.3G6UpSJ2fd7BPZbuYVnBBxUeqkBBdmp2K8ti0PkLgzk");
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
