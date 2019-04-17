/**
 * @file 项目主入口
 *
 */

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import toast from 'library/functions/toast'
import Icon from 'vue-svg-icon/Icon.vue'
import loadingBar from 'library/components/loadingBar'
import router from './router'
import store from './store'
import Pager from 'library/components/Pager'
import Empty from 'library/components/Empty'
import ContainerTitle from 'library/components/ContainerTitle'
import auth from 'library/plugins/auth'
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'
import authConfig from '@/common/config/auth'
import { userInfo, enumList } from '@/common/request'

// 线上环境，将错误加到sentry系统
// if (envStr === 'prod') {
//     Raven
//         .config('https://xxxxxxx@sentry.huatu.com/xxx')
//         .addPlugin(RavenVue, Vue)
//         .install()
// }

window.toast = toast
window.Vue = Vue

router.beforeEach((to, from, next) => {
    let user = store.state.userInfo
    let path = from.path
    if (!user.id) {
        /**
         * 获取用户的基本信息
         */
        userInfo()
            .then((res) => {
                store.commit('SET_USER_INFO', res.data)
                /**
                 * 获取枚举
                 */
                enumList().then((res) => {
                    store.commit('SET_ENUM_LIST', res.data)
                    if (to.path === '/') {
                        router.push('/')
                    }
                    next()
                })
            })
        return
    }

    if (path) {
        // 两个/之间的就是模块名称
        let moduleNames = /([^\/]+)/.exec(path)
        if (moduleNames && moduleNames[1]) {
            clearState(moduleNames[1])
        }
    }
    let toPath = to.path
    if (toPath == '/') {
        // store.commit('SET_CRUMB_OPTIONS', [])
    } else {
        // 两个/之间的就是模块名称
        let moduleNames = /([^\/]+)/.exec(toPath)
        if (moduleNames && moduleNames[1]) {
            clearState(moduleNames[1])
        }
    }
    loadingBar.start()
    next()
})

router.afterEach(route => {
    loadingBar.finish()
})

/**
 * 路由变化时，把之前的弹窗状态都清掉
 */
function clearState(module) {
    let status = store.state[module]
    if (status) {
        for (let key in status) {
            let property = status[key]
            if (status.hasOwnProperty(key) && property && typeof property === 'boolean') {
                status[key] = false
            }
        }
    }
}

Vue.component('icon', Icon)
Vue.component('Pager', Pager)
Vue.component('Empty', Empty)
Vue.component('ContainerTitle', ContainerTitle)
Vue.use(auth, authConfig)

Vue.use(ElementUI, { size: 'small' })


import 'library/filters/currency'
import 'library/filters/formatDate'
import 'library/filters/unitMoney'
import 'library/filters/week'
import 'library/filters/compressImage'
import 'library/filters/formatDurations'

new Vue({
    router,
    store,
    template: '<App/>',
    render: h => h(App)
}).$mount('#app')
