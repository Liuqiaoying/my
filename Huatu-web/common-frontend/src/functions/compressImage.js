/**
 * @file 图片裁剪压缩
 * @author lixiaobin
 */

function _compressImage(extName, width, height, noCrop) {
    return '?x-oss-process=image/resize,m_fill,h_' + height + ',w_' + width

}

function _compressImageQiNiu (extName, width, height, noCrop) {
    let result = '?imageView2/1'
    if (!width && !height) {
        return result
    }
    if (width) {
        result += '/w/' + width
    }
    if (height) {
        result += '/h/' + height
    }
    return result
}

/**
 * 压缩图片
 *
 * @param {Object} options
 * @property {string} options.url 原始图片地址
 * @property {number} options.width 显示宽度
 * @property {number} options.height 显示高度
 * @property {number=} options.rawWidth 原图宽度
 * @property {number=} options.rawHeight 原图高度
 * @property {boolean} options.noCrop 是否不裁剪
 * @return {string} 压缩后的图片地址
 */
let compressImage = function (url, options) {

    if (!url) {
        return ''
    }

    let extName = url.split('.').pop()
    if (extName === 'gif') {
        extName = 'jpg'
    }

    let width = options.width
    let height = options.height

    width = Math.floor(width)
    height = Math.floor(height)


    width = Math.floor(width * 2)
    height = Math.floor(height * 2)

    // 阿里
    if (url.indexOf('oss') > -1) {
        return url + _compressImage(extName, width, height, !!options.noCrop)
    // 七牛
    } else if (url.indexOf('clouddn') > -1) {
        return url + _compressImageQiNiu(extName, width, height, !!options.noCrop)
    } else {
        return url
    }
}

export default compressImage