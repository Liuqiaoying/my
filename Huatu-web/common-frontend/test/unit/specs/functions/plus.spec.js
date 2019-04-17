
import plus from 'library/functions/plus'

describe('function/plus.js', () => {
    it('input 6+3', () => {
        expect(plus(6, 3)).toBe(9)
    })
})