/**
 * @module 表格合并规则
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/calcTableSpan.js
 */

/**
 * 表格合并规则
 *
 * @param {Object} Object
 *
 * @returns {Object>}
 */
export default function ({ row, column, rowIndex, columnIndex }) {
    if (row.columnIndexs.indexOf(columnIndex) > -1) {
        if (row.rowspan && row.rowspanstart) {
            return {
                rowspan: row.rowspan,
                colspan: 1
            }
        } else {
            return {
                rowspan: 0,
                colspan: 0
            }
        }
    }
}