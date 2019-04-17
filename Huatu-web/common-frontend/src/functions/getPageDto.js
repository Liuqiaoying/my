/**
 * @module 获取分页的默认值
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/getPageDto.js
 */

/**
 * 获取分页的pageDto默认值
 */
export default function () {
    return {
        pageNum: 1,
        pageSize: 20,
        count: 0
    }
}