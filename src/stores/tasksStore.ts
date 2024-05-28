import defaultTasks from '@/data/defaultTasks'
import type { IStatusContainer, ITask } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ITasksStore {
  statusContainers: IStatusContainer[]
  addTask: (containerIndex: number, task: ITask) => void
  updateTask: (id: number, updates: ITaskUpdates) => void
}

interface ITaskUpdates {
  title?: string
  description?: string
}

export const useTasksStore = defineStore('tasksStore', () => {
  const statusContainers = ref<IStatusContainer[]>(defaultTasks)

  function addTask(containerIndex: number, task: ITask) {
    statusContainers.value[containerIndex].tasks.push(task)
  }

  function updateTask(taskId: number, updates: ITaskUpdates) {
    statusContainers.value
      .flatMap((container: IStatusContainer) => container.tasks)
      .forEach((task: ITask) => {
        if (task.id === taskId) {
          Object.assign(task, updates)
        }
      })
  }

  return { statusContainers, addTask, updateTask }
})
