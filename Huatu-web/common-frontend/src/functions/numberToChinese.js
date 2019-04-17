/**
 * 将阿拉伯数字转大写的中文数字
 */

let chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
let chnUnitChar = ['', '十', '百', '千']

export default function (section) {
    let strIns = ''
    let chnStr = ''
    let unitPos = 0
    let zero = true
    let target = section
    while (target > 0) {
        let v = section % 10
        if (v === 0) {
            if (!zero) {
                zero = true
                chnStr = chnNumChar[v] + chnStr
            }
        } else {
            zero = false
            strIns = chnNumChar[v]
            strIns += chnUnitChar[unitPos]
            chnStr = strIns + chnStr
        }
        unitPos++
        target = Math.floor(target / 10)
    }
    return chnStr
}