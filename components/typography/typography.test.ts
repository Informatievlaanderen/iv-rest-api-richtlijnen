import { mount } from '@vue/test-utils'
import typography from './typography.vue'

describe("Typography component", () => {
    const wrapper = mount(typography);
    test('Does the wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('Component has a govflanders components', () => {
        expect(wrapper.find('vl-typography').exists()).toBe(true)
    })
})