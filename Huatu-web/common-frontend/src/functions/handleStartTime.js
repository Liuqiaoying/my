/**
 * @module 处理时间范围的开始时间，时间设置为”00：00：00“
 * @auth XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/handleStartTime.js
 */

/**
 * 处理时间范围的开始时间，时间设置为”00：00：00“
 *
 * @param {number} time 需要处理的时间戳
 * @returns {number} 需要好的时间戳
 */
export default function (time) {
    let timeType = Object.prototype.toString.call(time)
    if (timeType == '[object Number]' || timeType == '[object Date]') {
        let date = new Date(time)
        return Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    } else {
        throw new Error('传入参数不正确')
    }
}