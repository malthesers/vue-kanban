import { supabase } from '@/lib/supabaseClient'
import generateStarterContainers from '@/utils/generateStarterContainers'

export default async function postStarterContainers(userId: string) {
  const starterContainers = generateStarterContainers(userId)
  const { data, error } = await supabase.from('containers').insert(starterContainers)

  if (error) {
    console.log(error)
  }
}
