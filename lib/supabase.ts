import { createClient } from "@supabase/supabase-js";

const KEY = process.env.NEXT_PUBLIC_KEY!;
const URL = process.env.NEXT_PUBLIC_URL!;
export const supabase = createClient(URL, KEY);
