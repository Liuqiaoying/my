/**
 * @module 获取周num小写对应的大写
 * @author XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/getWeekNum.js
 */

/**
 * 获取周的大写num
 *
 * @param  {number} day 星期n
 * @returns {string}
 */
export default function getWeekNum(day) {
    let config = {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        0: '日'
    }
    return config[day]
}