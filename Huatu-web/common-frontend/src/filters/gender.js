/**
 * @module 性别展示
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/gender.js
 */


import Vue from 'vue'

/**
 * 性别展示  1=女,2=男
 *
 * @param {number} value 性别id
 *
 * @returns {number} divided number
 */
Vue.filter('gender', function(value) {
    if (!value) {
        return '未知'
    }
    if (value === 1) {
        return '男'
    }
    if (value === 2) {
        return '女'
    }
})
