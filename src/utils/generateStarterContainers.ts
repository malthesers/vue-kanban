import defaultContainers from '@/data/defaultContainers'

export default function generateStarterContainers(id: string) {
  return defaultContainers.map((container) => ({ ...container, userId: id, created_at: new Date().toISOString() }))
}
