/**
 * @file store主入口
 */

import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import libraryStore from 'library/store'

Vue.use(Vuex)

let store = {
    strict: false,
    state: {
        userInfo: {},
        cachedViews: [],
        enumList: {}
    },
    mutations,
    actions,
    modules: {

    }
}

Object.assign(store.state, libraryStore.state)
Object.assign(store.actions, libraryStore.actions)
Object.assign(store.mutations, libraryStore.mutations)

export default new Vuex.Store(store)
