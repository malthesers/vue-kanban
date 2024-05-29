import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useTasksStore } from '@/stores/tasksStore'
import { setActivePinia, createPinia } from 'pinia'
import TaskCardDescription from '../TaskCard/TaskCardDescription.vue'

describe('TaskCardDescription', () => {
  let tasksStore
  const props = {
    isEditing: false,
    isHovering: false,
    task: {
      id: 0,
      title: 'Implement thing',
      description: 'Use the given technology to implement the thing'
    },
    bgColor: '#9CE899'
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('renders with correct task description', () => {
    const wrapper = mount(TaskCardDescription, { props })

    expect(wrapper.text()).toContain(props.task.description)
  })
})
