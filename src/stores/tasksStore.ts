import defaultTasks from '@/data/defaultTasks'
import type { IStatusContainer, ITask, ITaskUpdates } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  function removeTask(taskId: number) {
    statusContainers.value.forEach((container) => {
      const taskToRemove = container.tasks.find((task: ITask) => task.id === taskId)

      if (taskToRemove) {
        container.tasks = container.tasks.filter((task) => task.id !== taskId)
      }
    })
  }

  function addStatusContainer(statusContainer: IStatusContainer) {
    statusContainers.value.push(statusContainer)
  }

  return { statusContainers, addTask, updateTask, removeTask, addStatusContainer }
})
