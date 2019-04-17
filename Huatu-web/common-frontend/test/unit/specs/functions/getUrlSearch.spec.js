
import getUrlSearch from 'library/functions/getUrlSearch'

describe('function/getUrlSearch.js', () => {

    it('check search is correct', () => {
        expect(getUrlSearch().name).toEqual('xiaobin')
    })

})