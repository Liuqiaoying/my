
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SideBar from 'library/components/SideBar'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElScrollbar from 'element-ui'
import Vue from 'vue'

Vue.component('Icon', Vue.extend({
    template: '<span>11111</span>'
}))

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

let links = [
    {
        title: 'test',
        icon: 'approve',
        path: '/test'
    }
]

const router = new VueRouter()
let store = new Vuex.Store({
    state: {},
    actions: {}
})

describe('SideBar.vue', () => {
    const wrapper = shallowMount(SideBar, {
        localVue,
        store,
        router,
        propsData: {
            links
        },
        children: [ElScrollbar]
    })
    test('render result', () => {
        expect(wrapper.contains('.sidebar')).toBe(true)
    })
    test('render result', () => {
        expect(wrapper.contains('elmenuitem-stub    ')).toBe(true)
    })
})
