import { defineStore } from 'pinia'
import type { ITask } from '@/types'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<ITask[]>([
    {
      title: 'Do this',
      description: 'Complete doing this one particular thing that is to be done'
    }
  ])

  return { tasks }
})
