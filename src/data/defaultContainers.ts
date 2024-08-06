import type { IStatusContainerStarter } from '@/types'

const defaultContainers: IStatusContainerStarter[] = [
  {
    order: 0,
    title: 'To do',
    color: '#9CE899',
  },
  {
    order: 1,
    title: 'In progress',
    color: '#FFECBE',
  },
  {
    order: 2,
    title: 'Blocked',
    color: '#F2B8B4',
  },
  {
    order: 3,
    title: 'Done',
    color: '#78C1E6',
  },
]

export default defaultContainers
