
import Cookies from 'js-cookie'
import { postWithJson } from 'library/utils/serviceUtil'

export default {
    state: {
        sidebar: {
            opened: !Number(Cookies.get('sidebarStatus')),
            withoutAnimation: false,
            unreadMessageNum: 0,
            unreadMessageList: [],
            loading: false
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        // 获取未读通知列表
        getUnreadMessageList() {

            const params = {
                pageSize: 10,
                pageNum: 1
            }

            this.state.sidebar.loading = true

            postWithJson('/message/list.json', params)
                .then(res => {
                    this.state.sidebar.unreadMessageList = res.data
                    this.state.sidebar.loading = false
                })
                .catch(() => {
                    this.state.sidebar.unreadMessageNum = 0
                    this.state.sidebar.loading = false
                })
        }
    },
    mutations: {
        SET_UNREAD_NUM: (state, num) => {
            state.sidebar.unreadMessageNum = num
        },
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        }
    }
}