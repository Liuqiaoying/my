/**
 * @file 获得小数的位数
 * @author XiaoBin Li
 */

/**
 * 获得小数的位数
 *
 * @param {string} str
 * @return {number}
 */
export default function (str) {

    let parts = (String(str)).split('.')

    return parts.length === 2 ? parts[1].length : 0

}
