import type { IStatusContainer } from '@/types'
import { defineStore } from 'pinia'

interface ITasksContainers {
  toDo: IStatusContainer
  inProgress: IStatusContainer
  blocked: IStatusContainer
  done: IStatusContainer
}

export const useTasksStore = defineStore('tasks', () => {
  const tasksContainers = ref<ITasksContainers>({
    toDo: {
      title: 'To do',
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
    inProgress: {
      title: 'In progress',
      tasks: []
    },
    blocked: {
      title: 'Blocked',
      tasks: []
    },
    done: {
      title: 'Done',
      tasks: []
    }
  })

  return { tasksContainers }
})
