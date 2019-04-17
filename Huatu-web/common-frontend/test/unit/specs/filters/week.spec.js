
require('library/filters/week')

describe('filter/week.js', () => {

    it('input 1', () => {
        let week = Vue.filter('week')(1)
        expect(week).toEqual('一')
    })

    it('input empty', () => {
        let week = Vue.filter('week')()
        expect(week).toEqual('')
    })

    it('input timestamp', () => {
        let today = new Date('Tue Nov 28 2017 17:53:54 GMT+0800 (CST)')
        let week = Vue.filter('week')(1511862822861)
        expect(week).toEqual('二')
    })
})