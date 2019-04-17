/**
 * @file 乘法
 * @author XiaoBin Li
 */

import decimalLength from './decimalLength'
import float2Int from './float2Int'

/**
 * 乘法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function (a, b) {
    let length = Math.max(
        decimalLength(a),
        decimalLength(b)
    )

    let c = float2Int(a, length)
    let d = float2Int(b, length)

    let factor = Math.pow(10, length)

    return (c * d) / (factor * factor)
}
