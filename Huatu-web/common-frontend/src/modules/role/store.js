/**
 * @file 角色管理-store
 * @author lixiaobin
 */

const state = {
    addRoleState: false,
    setFilterState: false,
    setPermissionState: false,
}

const mutations = {
    'SHOW_ADD_ROLE'(state, role) {
        state.addRoleState = true
        state.role = role
    },
    'HIDE_ADD_ROLE'(state) {
        state.addRoleState = false
        state.role = null
    },
    'SHOW_SET_FILTER'(state, role) {
        state.setFilterState = true
        state.role = role
    },
    'HIDE_SET_FILTER'(state) {
        state.setFilterState = false
        state.role = null
    },
    'SHOW_SET_PERMISSION'(state, role) {
        state.setPermissionState = true
        state.role = role
    },
    'HIDE_SET_PERMISSION'(state) {
        state.setPermissionState = false
        state.role = null
    }
}

export default {
    state,
    mutations
}