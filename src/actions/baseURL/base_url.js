import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = "https://toaztpiecwakmyhwwurq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvYXp0cGllY3dha215aHd3dXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NDgyNzcsImV4cCI6MjA3MjQyNDI3N30.wTXk8-FWTYEIXLIVtpeF6FR-47oLTLoy6DdN_f6FgZo"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
