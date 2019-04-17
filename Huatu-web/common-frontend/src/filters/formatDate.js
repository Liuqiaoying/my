
/**
 * @module 格式化时间
 * @author Xiong,Cheng-Qing
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/formatDate.js
 */

import fecha from 'element-ui/lib/utils/date'
import Vue from 'vue'

/**
 * 格式化时间
 *
 * @param {number} value 时间
 * @param {string} mask 时间格式
 *
 * @return {string} masked date
 */
Vue.filter('formatDate', function(value, mask = 'yyyy/MM/dd') {
    let date = value
    if (typeof value === 'string') {
        date = new Date(value)
    }
    return date ? fecha.format(date, mask) : ''
})