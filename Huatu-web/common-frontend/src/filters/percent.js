/**
 * @module 小数展示成百分数
 * @author liying
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/percent.js
 */


import Vue from 'vue'
/**
 *
 *
 * @param {number} value 传入的值为  multiply(*.****,100 )
 *
 * @returns {string}
 */
Vue.filter('percent', function(value) {
    return value + '%'
})
