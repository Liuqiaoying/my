/**
 * @module 根据周n小写数字换取大写数字
 * @author XiaoBin Li(lixiaobin@huatu.com)
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/week.js
 */


import Vue from 'vue'
import getWeekNum from '../functions/getWeekNum'

/**
 * 显示周几
 *
 * @param {number} date
 * @return {string} 周n的大写数字
 */
Vue.filter('week', function(date) {
    if (typeof date === 'number' && (String(date)).length === 1) {
        return getWeekNum(date)
    }
    if (!date) {
        return ''
    }
    let day = new Date(date).getDay()
    return getWeekNum(day)
})