/**
 * @file 格式化时间
 * @author Xiong,Cheng-Qing
 */

import fecha from 'element-ui/lib/utils/date'

const formatDate = function (datetime, mask = 'yyyy/MM/dd') {
    if (!datetime) {
        return ''
    }
    return fecha.format(datetime, mask)
}

export default formatDate

