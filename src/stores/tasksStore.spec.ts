import { setActivePinia, createPinia } from 'pinia'
import { useTasksStore, type ITasksStore } from './tasksStore'
import { beforeEach, describe, it, expect } from 'vitest'
import type { ITask } from '@/types'

describe('tasksStore', () => {
  let tasksStore: ITasksStore

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('initialises with the default status containers', () => {
    expect(tasksStore.statusContainers.length).toBe(4)
  })

  it('initialises with correct properties of status containers', () => {
    tasksStore.statusContainers.forEach((container) => {
      expect(container).toHaveProperty('title')
      expect(container).toHaveProperty('color')
      expect(container).toHaveProperty('tasks')
    })
  })

  it('initialises with correct types of properties', () => {
    tasksStore.statusContainers.forEach((container) => {
      expect(typeof container.title).toBe('string')
      expect(typeof container.color).toBe('string')
      expect(Array.isArray(container.tasks)).toBe(true)
    })
  })

  it('succesfully adds new task', () => {
    const containerIndex = 0
    const newTask: ITask = {
      id: 0,
      title: 'Implement thing',
      description: 'Use the given technology to implement the thing'
    }

    tasksStore.addTask(containerIndex, newTask)

    expect(tasksStore.statusContainers[containerIndex].tasks).toContainEqual(newTask)
  })

  it('succesfully updates task titles', () => {
    const newTitle = 'Implement thing'

    expect(tasksStore.statusContainers[0].tasks[0].title).not.toBe(newTitle)

    tasksStore.updateTask(1, { title: newTitle })

    expect(tasksStore.statusContainers[0].tasks[0].title).toBe(newTitle)
  })

  it('succesfully updates task descriptions', () => {
    const newDescription = 'Use the given technology to implement the thing'

    expect(tasksStore.statusContainers[0].tasks[0].description).not.toBe(newDescription)

    tasksStore.updateTask(1, { description: newDescription })

    expect(tasksStore.statusContainers[0].tasks[0].description).toBe(newDescription)
  })
})
