
import isRepeat from 'library/functions/isRepeat'

describe('function/isRepeat.js', () => {
    it('input array', () => {
        let array = [1, 2, 3]
        expect(isRepeat(array)).toBe(false)
    })
    it('input array', () => {
        let array = [1, 2, 3, 3]
        expect(isRepeat(array)).toBe(true)
    })
})