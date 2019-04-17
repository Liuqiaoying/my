
import getMonthEnds from 'library/functions/getMonthEnds'

describe('function/getMonthEnds.js', () => {
    it('input date', () => {
        let date = Number(new Date('Aug 24,2018'))
        expect(getMonthEnds(date)).toEqual([new Date(2018, 7, 1), new Date(2018, 8, 0)])
    })
})
