/**
 * @file 公共mitations，用于更改全局配置项
 *
 */

export default {
    // 设置用户信息
    'SET_USER_INFO'(state, userInfo) {
        state.userInfo = userInfo
    },
    // 设置枚举项
    'SET_ENUM_LIST'(state, list) {
        state.enumList = list
    },
}
