import defaultContainers from '@/data/defaultContainers'
import expandStarterContainer from './expandStarterContainer'

export default function generateStarterContainers() {
  return defaultContainers.map((container) => expandStarterContainer(container))
}
