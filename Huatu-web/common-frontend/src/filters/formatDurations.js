/**
 * @module 后端传来的科目时长为分钟数，需展现为xx时xx分
 * @author jiangjun
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/formatDurations.js
 */


import Vue from 'vue'

/**
 * 后端传来的科目时长为分钟数，需展现为xx时xx分
 *
 * @param {number} value 分钟数
 *
 * @returns {string} xx时xx分
 */
Vue.filter('formatDurations', function(value) {
    if (value === null || value === '') {
        return '--'
    } else {
        return `${parseInt(value / 60, 10)}时${(value % 60).toFixed(0)}分`
    }
})
