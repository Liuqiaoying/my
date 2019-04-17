
import formatDate from 'library/functions/formatDate'

describe('function/formatDate.js', () => {
    it('input date', () => {
        let date = new Date('Aug 24,2018')
        expect(formatDate(date)).toBe('2018/08/24')
    })
    it('input date', () => {
        let date = null
        expect(formatDate(date)).toBe('')
    })
})