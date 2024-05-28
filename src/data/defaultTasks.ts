import type { IStatusContainer } from '@/types'

const dummyTasks: IStatusContainer[] = [
  {
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
        title: 'Didgeridoo woohoo time to do what it do',
        description: 'Complete doing the didgeridoo thing that is to be done.'
      }
    ]
  },
  {
    title: 'In progress',
    color: '#FFECBE',
    tasks: []
  },
  {
    title: 'Blocked',
    color: '#F2B8B4',
    tasks: []
  },
  {
    title: 'Done',
    color: '#78C1E6',
    tasks: []
  }
]

export default dummyTasks
