import defaultContainers from '@/data/defaultContainers'
import type { IStatusContainer, IStatusContainerUpdates, ITask, ITaskUpdates } from '@/types'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useTasksStore = defineStore('tasksStore', () => {
  const statusContainers: Ref<IStatusContainer[]> = ref([])

  function addTask(containerIndex: number, task: ITask) {
    statusContainers.value[containerIndex].tasks.push(task)
  }

  function updateTask(taskId: number, updates: ITaskUpdates) {
    statusContainers.value.forEach((container: IStatusContainer) => {
      container.tasks.forEach((task: ITask) => {
        if (task.id === taskId) {
          Object.assign(task, updates)
        }
      })
    })
  }

  function removeTask(taskId: number) {
    statusContainers.value.forEach((container: IStatusContainer) => {
      const taskToRemove = container.tasks.find((task: ITask) => task.id === taskId)

      if (taskToRemove) {
        container.tasks = container.tasks.filter((task) => task.id !== taskId)
      }
    })
  }

  function addStatusContainer(statusContainer: IStatusContainer) {
    statusContainers.value.push(statusContainer)
  }

  function updateStatusContainer(statusContainerId: string, updates: IStatusContainerUpdates) {
    statusContainers.value.forEach((container: IStatusContainer) => {
      if (container.id === statusContainerId) {
        Object.assign(container, updates)
      }
    })
  }

  function initiateStatusContainers(containers: IStatusContainer[]) {
    console.log(containers)
    statusContainers.value = containers
  }

  return {
    statusContainers,
    addTask,
    updateTask,
    removeTask,
    addStatusContainer,
    updateStatusContainer,
    initiateStatusContainers,
  }
})
