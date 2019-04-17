/**
 * @module OSS片裁剪
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/filters/compressImage.js
 */

import compressImage from '../functions/compressImage'

import Vue from 'vue'

/**
 * 裁剪图片
 *
 * @param {string} url
 * @param {number} width
 * @param {number} height
 *
 * @return {string}
 */
Vue.filter('compressImage', function(url, width, height) {
    let targetUrl = url || 'https://htwuhan.oss-cn-beijing.aliyuncs.com/tool/default-icon.png'
    let reg = /oss-cn-beijing/
    let isCompressed = reg.test(targetUrl)
    if (isCompressed) {
        let httpsUrl = targetUrl.replace('http://', 'https://')
        return compressImage(httpsUrl, {
            width: width,
            height: height
        })
    }
    else {
        return targetUrl
    }
})