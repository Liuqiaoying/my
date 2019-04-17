/**
 * @module 除法
 * @author XiaoBin Li
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/divide.js
 */

import decimalLength from './decimalLength'
import float2Int from './float2Int'

/**
 * 除法
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export default function (a, b) {

    let length = Math.max(
        decimalLength(a),
        decimalLength(b)
    )

    let c = float2Int(a, length)
    let d = float2Int(b, length)

    return c / d

}
