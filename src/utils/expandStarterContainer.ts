import { useAuthStore } from '@/stores/authStore'
import type { IStatusContainerStarter, IStatusContainerSupabase } from '@/types'
import getTimestampISO from './getTimestampISO'
import { v4 as uuidv4 } from 'uuid'

export default function expandStarterContainer(container: IStatusContainerStarter): IStatusContainerSupabase | null {
  const authStore = useAuthStore()

  if (!authStore.user) return null

  return {
    ...container,
    id: uuidv4(),
    userId: authStore.user.id,
    created_at: getTimestampISO(),
  }
}
