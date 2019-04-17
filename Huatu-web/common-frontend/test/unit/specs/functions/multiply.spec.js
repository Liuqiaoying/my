
import multiply from 'library/functions/multiply'

describe('function/multiply.js', () => {
    it('input 6*3', () => {
        expect(multiply(6, 3)).toBe(18)
    })
})