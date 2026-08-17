import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
if(!supabaseUrl || !supabaseKey){
    throw new Error("Missing Environment Vars");
}
export const supabase = createClient(supabaseUrl, supabaseKey);