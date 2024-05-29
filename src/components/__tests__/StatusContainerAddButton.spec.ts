import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useTasksStore } from '@/stores/tasksStore'
import { setActivePinia, createPinia } from 'pinia'
import StatusContainerAddButton from '../StatusContainer/StatusContainerAddButton.vue'

describe('StatusContainerAddButton', () => {
  let tasksStore

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('renders with add button', () => {
    const wrapper = mount(StatusContainerAddButton, { props: { containerIndex: 0 } })

    expect(wrapper.text()).toContain('Add')
  })
})
