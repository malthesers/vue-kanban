import type { IStatusContainer } from '@/types'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const statusContainers = ref<IStatusContainer[]>([
    {
      title: 'To do',
      color: '#9CE899',
      tasks: [
        {
          title: 'Do this',
          description: 'Complete doing this one particular thing that is to be done.'
        },
        {
          title: 'Do that',
          description: 'Complete doing that one particular thing that is to be done.'
        },
        {
          title: 'Didgeridoo',
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
  ])

  return { statusContainers }
})
