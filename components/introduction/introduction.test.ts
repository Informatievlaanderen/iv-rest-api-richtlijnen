import { mount } from '@vue/test-utils'
import introduction from './introduction.vue'

describe("Introduction component", () => {
    const wrapper = mount(introduction);
    test('Does the wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })
})