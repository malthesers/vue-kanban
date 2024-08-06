import { supabase } from '@/lib/supabaseClient'
import type { IStatusContainerSupabase } from '@/types'

export default async function postNewContainer(container: IStatusContainerSupabase) {
  const { data, error } = await supabase.from('containers').insert(container)

  if (data) {
    console.log(data)
  } else if (error) {
    console.log(error)
  }
}
