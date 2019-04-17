/**
 * @module 获取月份的第一天和最后一天时间
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/getMonthEnds.js
 */

/**
 * 获取某月份第一天和最后一天的时间
 *
 * @param {number} date 时间戳
 * @returns {Array<Date>} 第一天和最后一天
 */
export default function (date) {
    let day = new Date(date)
    let year = day.getFullYear()
    let month = day.getMonth()

    return [new Date(year, month, 1), new Date(year, month + 1, 0)]
}