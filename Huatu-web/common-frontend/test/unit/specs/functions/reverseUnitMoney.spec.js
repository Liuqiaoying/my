
import reverseUnitMoney from 'library/functions/reverseUnitMoney'

describe('function/reverseUnitMoney.js', () => {
    it('input 10', () => {
        expect(reverseUnitMoney(10, 10)).toBe(100)
    })
    // it('input 10', () => {
    //     expect(reverseUnitMoney(0, 10)).toBe(0)
    // })
})
