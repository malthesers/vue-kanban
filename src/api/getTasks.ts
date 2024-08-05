import { supabase } from '@/lib/supabaseClient'

export default async function getTasks() {
  const { data, error } = await supabase.from('containers').select(`
    id,
    title,
    color,
    tasks (
      id,
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
