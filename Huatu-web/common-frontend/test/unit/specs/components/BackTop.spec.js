import { mount } from '@vue/test-utils'
import BackTop from 'library/components/BackTop'

describe('BackTop.vue', () => {

    const wrapper = mount(BackTop)
    test('has a img', () => {
        expect(wrapper.contains('img')).toBe(true)
    })
})