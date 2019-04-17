/**
 * @module 检查密码强度
 * @author Xiong,Cheng-Qing
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/checkPasswordStrength.js
 */

/**
 * 检查密码强度
 *
 * @param {string} password
 * @returns {Number}
 */
export default function checkPasswordStrength (pwd) {
    let number = []
    let lowercase = []
    let uppercase = []
    let specialchars = []
    let comb = {}
    let key
    for (let f = 0; f < pwd.length; f++) {
        key = pwd.charCodeAt(f)
        if (!comb[key]) {
            if (key >= 48 && key <= 57) {
                number.push(key)
            } else {
                if (key >= 65 && key <= 90) {
                    uppercase.push(key)
                } else {
                    if (key >= 97 && key <= 122) {
                        lowercase.push(key)
                    } else {
                        specialchars.push(key)
                    }
                }
            }
            comb[key] = true
        }
    }
    let strength = 0
    if (number.length > 0) {
        strength++
    }
    if (lowercase.length > 0) {
        strength++
    }
    if (lowercase.length > 2) {
        strength++
    }
    if (uppercase.length > 0) {
        strength++
    }
    if (uppercase.length > 2) {
        strength++
    }
    if (specialchars.length > 0) {
        strength += 2
    }
    if (specialchars.length > 2) {
        strength += 2
    }
    return strength
}
