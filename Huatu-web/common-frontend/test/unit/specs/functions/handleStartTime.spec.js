
import handleStartTime from 'library/functions/handleStartTime'

describe('function/handleStartTime.js', () => {

    test('input date', () => {
        let date = Number(new Date('Aug 24,2018'))
        expect(handleStartTime(date)).toEqual(Number(new Date(2018, 7, 24, 0, 0, 0)))
    })
    test('input null', () => {
        expect(handleStartTime.bind(null, null)).toThrow('传入参数不正确')
    })

})
