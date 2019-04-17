/**
 * @file 将金额元改化成毫
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

import multiply from './multiply'

/**
 * 将金额元改化成毫
 *
 * @param {number} value 元
 * @param {number} unit 单元
 *
 * return {number} 元
 */
export default function (value = 0, unit = 10000) {
    return multiply(value, unit)
}
