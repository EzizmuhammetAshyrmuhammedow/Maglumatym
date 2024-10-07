import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY} from '$env/static/private';

const supabaseUrl = SUPABASE_URL as string;
const supabaseKey = SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
