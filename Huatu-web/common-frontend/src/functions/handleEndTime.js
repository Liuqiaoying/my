/**
 * @module 处理时间范围的结束时间，补全”23：59：59“
 * @author XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/handleEndTime.js
 */

/**
 * 处理时间范围的结束时间，补全”23：59：59“
 *
 * @param {number} time 需要处理的时间戳
 * @returns {number} 需要好的时间戳
 */
export default function (time) {
    let timeType = Object.prototype.toString.call(time)
    if (timeType == '[object Number]' || timeType == '[object Date]') {
        let date = new Date(time)
        return Number(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59))
    } else {
        throw new Error('传入参数不正确')
    }
}