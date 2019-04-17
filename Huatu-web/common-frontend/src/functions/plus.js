/**
 * @file 加法
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */



import decimalLength from './decimalLength'
import float2Int from './float2Int'

/**
 * 加法
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

    return (c + d) / Math.pow(10, length)
}
