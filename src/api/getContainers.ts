import { supabase } from '@/lib/supabaseClient'
import { useTasksStore } from '@/stores/tasksStore'

export default async function getContainers() {
  const { initiateStatusContainers } = useTasksStore()
  const { data, error } = await supabase.from('containers').select(`
    id,
    userId,
    created_at,
    title,
    color,
    order,
    tasks (
      id,
      userId,
      created_at,
      title,
      description
    )
  `)

  if (error) {
    console.log('Error: ', error)

    return []
  } else {
    initiateStatusContainers(data)
  }
}
