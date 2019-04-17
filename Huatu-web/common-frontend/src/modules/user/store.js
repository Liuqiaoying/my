/**
 * @file 用户管理
 * @author lixiaobin
 */

const state = {
    addUserState: false,
    user: null
}

const mutations = {
    'SHOW_USER_EDIT'(state, user) {
        state.addUserState = true
        state.user = user
    },
    'HIDE_USER_EDIT'(state) {
        state.addUserState = false
        state.user = null
    }
}

export default {
    state,
    mutations
}