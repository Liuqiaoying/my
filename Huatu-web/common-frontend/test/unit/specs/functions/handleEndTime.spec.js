
import handleEndTime from 'library/functions/handleEndTime'

describe('function/handleEndTime.js', () => {

    it('input date', () => {
        let date = Number(new Date('Aug 24,2018'))
        expect(handleEndTime(date)).toEqual(Number(new Date(2018, 7, 24, 23, 59, 59)))
    })
    it('input null', () => {
        expect(handleEndTime.bind(null, null)).toThrow('传入参数不正确')
    })

})
