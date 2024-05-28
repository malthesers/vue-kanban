import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from '../layout/AppHeader.vue'

describe('AppHeader', () => {
  it('renders properly', () => {
    // const wrapper = mount(AppHeader, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Kanban')
  })
})
