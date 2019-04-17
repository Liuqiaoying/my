/**
 * @module 格式化货币 12345 => $12,345.00
 * @author Xiong,Cheng-Qing
 * @see
 * http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/currency.js
 */

import Vue from 'vue'

/*
 * 格式化货币
 *
 * @param {string} symbol
 * @param {number} decimals Decimal places
 * @param {Object} options
 *
 * @returns {number} 格式化货币
 */
Vue.filter('currency', function (v, s, d, options = {}) {
    let thousandsSeparator
    let symbolOnLeft
    let spaceBetweenAmountAndSymbol
    let digitsRE = /(\d{3})(?=\d)/g
    let value = parseFloat(v)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    let symbol = s != null ? s : '￥'
    let decimals = d != null ? d : 2
    thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ','
    symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true
    spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false
    let stringified = Math.abs(value).toFixed(decimals)
    stringified = options.decimalSeparator
        ? stringified.replace('.', options.decimalSeparator)
        : stringified
    let _int = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified
    let i = _int.length % 3
    let head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : ''))
        : ''
    let _float = decimals
        ? stringified.slice(-1 - decimals)
        : ''
    symbol = spaceBetweenAmountAndSymbol
        ? (symbolOnLeft ? symbol + ' ' : ' ' + symbol)
        : symbol
    symbol = symbolOnLeft
        ? symbol + head +
            _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float
        : head +
            _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol
    let sign = value < 0 ? '-' : ''
    return sign + symbol
})

