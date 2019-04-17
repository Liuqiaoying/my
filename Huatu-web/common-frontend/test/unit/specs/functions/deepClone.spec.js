
import deepClone from 'library/functions/deepClone'

describe('function/deepClone.js', () => {
    it('input array', () => {
        let array = [1, 2, 3]
        let result = deepClone(array)
        result[0] = 5
        expect(array[0]).toBe(1)
        expect(result[0]).toBe(5)
    })

    it('input number', () => {
        let num = 1
        let result = deepClone(num)
        result = 5

        expect(num).toBe(1)
        expect(result).toBe(5)
    })


    it('input object', () => {
        let obj = {
            name: 'xiaobin'
        }
        let result = deepClone(obj)
        result.name = 'yingjie'
        expect(obj.name).toEqual('xiaobin')
        expect(result.name).toBe('yingjie')
    })

})