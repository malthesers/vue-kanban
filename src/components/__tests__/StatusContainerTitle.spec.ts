import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { useTasksStore } from '@/stores/tasksStore'
import { setActivePinia, createPinia } from 'pinia'
import StatusContainerTitle from '../StatusContainer/StatusContainerTitle.vue'

describe('StatusContainerTitle', () => {
  let tasksStore

  beforeEach(() => {
    setActivePinia(createPinia())
    tasksStore = useTasksStore()
  })

  it('renders with parameterised text', () => {
    const wrapper = mount(StatusContainerTitle, {
      props: {
        statusContainer: {
          title: 'To do',
          id: 0,
          color: '',
          tasks: []
        },
        bgColor: '#9CE899'
      }
    })

    expect(wrapper.text()).toContain('To do')
  })
})
