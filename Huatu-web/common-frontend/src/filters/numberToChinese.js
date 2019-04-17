/**
 * @module 将阿拉伯数字转大写的中文数字
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/gender.js
 */

import numberToChinese from 'library/functions/numberToChinese'

import Vue from 'vue'

/**
 * 将阿拉伯数字转中文数字
 *
 * @param {number} value 拉伯数字
 *
 * @returns {string} 中文数字
 */
Vue.filter('numberToChinese', function(value) {
    if (!value) {
        return ''
    }
    return numberToChinese(value)
})
