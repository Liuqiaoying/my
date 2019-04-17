/**
 * @module 后端存储的金额一般是以分为单位，将分转化成元
 * @author Xiong,Cheng-Qing
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/unitMoney.js
 */


import divide from '../functions/divide'
import Vue from 'vue'

/**
 * 后端存储的金额一般是以分为单位，将分转化成元
 *
 * @param {number} value 金额
 *
 * @returns {number} divided number
 */
Vue.filter('unitMoney', function(value, unit = 10000) {
    return divide(value, unit)
})
