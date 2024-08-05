import { supabase } from '@/lib/supabaseClient'

export default async function getTasks() {
  const { data, error } = await supabase.from('containers').select(`
    id,
    created_at,
    title,
    color,
    tasks (
      id,
      created_at,
      title,
      description
    )
  `)

  if (error) {
    console.log('Error: ', error)

    return []
  } else {
    return data
  }
}
