/**
 * @module 将对象转化成url参数
 * @auth XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/params.js
 */

/**
 * 将对象转化成url参数
 *
 * @param {Object} obj 需要处理的对象
 *
 * @returns {string} 处理好的字符串
 */
export default function (obj) {
    let result = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key + '=' + obj[key])
        }
    }
    return result.join('&')
}