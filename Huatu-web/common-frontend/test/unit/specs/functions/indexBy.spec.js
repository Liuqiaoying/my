
import indexBy from 'library/functions/indexBy'

describe('function/indexBy.js', () => {
    it('input array', () => {
        let array = [{ id: 1, name: 'zhang' }, { id: 2, name: 'li' }]
        let key = 'id'
        let result = indexBy(array, key)
        expect(result[1].name).toBe('zhang')
    })
})