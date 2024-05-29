import type { IStatusContainer } from '@/types'

const dummyTasks: IStatusContainer[] = [
  {
    id: 1,
    title: 'To do',
    color: '#9CE899',
    tasks: [
      {
        id: 1,
        title: 'Do this',
        description: 'Complete doing this one particular thing that is to be done.'
      },
      {
        id: 2,
        title: 'Do that',
        description: 'Complete doing that one particular thing that is to be done.'
      },
      {
        id: 3,
        title: 'Do the didgeridoo with this and that',
        description: 'Complete doing the didgeridoo thing that is to be done.'
      }
    ]
  },
  {
    id: 2,
    title: 'In progress',
    color: '#FFECBE',
    tasks: []
  },
  {
    id: 3,
    title: 'Blocked',
    color: '#F2B8B4',
    tasks: []
  },
  {
    id: 4,
    title: 'Done',
    color: '#78C1E6',
    tasks: []
  }
]

export default dummyTasks
