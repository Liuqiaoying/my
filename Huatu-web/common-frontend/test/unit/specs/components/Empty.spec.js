import Vue from 'vue'
import Empty from 'library/components/Empty'

describe('Empty.vue', () => {
    let div = null
    beforeAll(() => {
        let dom = document.createElement('div')
        dom.className = 'main'
        div = dom
    })
    afterAll(() => {
        div = null
    })
    it('has not text prop', () => {
        const vm = new Vue({
            el: div,
            render: (h) => h(Empty)
        })
        expect(vm.$el.textContent.trim()).toEqual('暂无数据')
    })

    it('the text prop is hello', () => {
        const vm = new Vue({
            el: div,
            components: {
                Empty
            },
            render: (h) => {
                return (
                    <empty text="hello">
                    </empty>
                )
            }
        })
        expect(vm.$el.textContent.trim()).toEqual('hello')
    })
})
