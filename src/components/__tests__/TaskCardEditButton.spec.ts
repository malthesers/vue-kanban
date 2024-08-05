import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useTasksStore } from '@/stores/tasksStore'
import { setActivePinia, createPinia } from 'pinia'
import TaskCardEditButton from '../TaskCard/TaskCardEditButton.vue'

describe('TaskCardEditButton', () => {
  let tasksStore
  const props = {
    isHovering: false,
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('renders with only an icon', () => {
    const wrapper = mount(TaskCardEditButton, { props })

    expect(wrapper.text()).toContain('')
  })
})
