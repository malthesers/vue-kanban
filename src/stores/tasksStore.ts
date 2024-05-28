import defaultTasks from '@/data/defaultTasks'
import type { IStatusContainer } from '@/types'
import { defineStore } from 'pinia'

interface ITaskUpdates {
  title?: string
  description?: string
}

export const useTasksStore = defineStore('tasks', () => {
  const statusContainers = ref<IStatusContainer[]>(defaultTasks)

  function updateTask(id: number, updates: ITaskUpdates) {
    statusContainers.value
      .flatMap((container) => container.tasks)
      .forEach((task) => {
        if (task.id === id) {
          Object.assign(task, updates)
        }
      })
  }

  return { statusContainers, updateTask }
})
