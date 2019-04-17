/**
 * @module 把小数转成整数，避免小数计算的精度问题
 * @author XiaoBin Li
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/float2Int.js
 */

/**
 * 把小数转成整数，避免小数计算的精度问题
 *
 * @param {string|number} float 浮点数
 * @param {number=} length 可选，右移的位数
 * @return {number}
 */
export default function (float, length = 0) {

    let parts = (String(float)).split('.')
    let result

    if (parts.length === 1) {
        result = float + new Array(length + 1).join('0')
    }
    else {
        let l = Math.max(0, length - parts[1].length)
        result = parts.join('') + new Array(l + 1).join('0')
    }

    return Number(result)

}