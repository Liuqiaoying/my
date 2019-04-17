/**
 * @file 菜单管理-store
 * @author lixiaobin
 */

const state = {
    addMenuState: false,
    menu: null,
    isEdit: false
}

const mutations = {
    'SHOW_ADD_MENU'(state, node) {
        state.addMenuState = true
        state.menu = node
    },
    'SHOW_EDIT_MENU'(state, node) {
        state.addMenuState = true
        state.menu = node
        state.isEdit = true
    },
    'HIDE_ADD_MENU'(state) {
        state.addMenuState = false
        state.menu = null
        state.isEdit = false
    }
}

export default {
    state,
    mutations
}