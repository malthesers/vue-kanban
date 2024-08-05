import { createClient } from '@supabase/supabase-js'

const supabaseProjectUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseProjectUrl, supabaseAnonKey)
