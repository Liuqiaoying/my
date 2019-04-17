/**
 * @module 获取当前url的search
 * @author XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/getUrlSearch.js
 */

let url = require('../utils/url')

/**
 *  获取当前url的search
 */
export default function getUrlSearch () {
    return url.parseQuery(window.location.search)
}