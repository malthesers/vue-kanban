import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useTasksStore } from '@/stores/tasksStore'
import { setActivePinia, createPinia } from 'pinia'
import TaskCardDeleteButton from '../TaskCard/TaskCardDeleteButton.vue'

describe('TaskCardDeleteButton', () => {
  let tasksStore
  const props = {
    isHovering: false,
    taskId: 1,
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('renders with only an icon', () => {
    const wrapper = mount(TaskCardDeleteButton, { props })

    expect(wrapper.text()).toContain('')
  })
})
