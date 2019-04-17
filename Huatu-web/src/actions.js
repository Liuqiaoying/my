/**
 * @file 公共actions，用于更改全局配置项
 *
 */

import {
    userInfo,
} from '@/common/request'

export default {
    /**
     * 更新全局配置
     */
    updateGlobalConfig({ commit, state }) {
        /**
         * 获取用户的基本信息
         */
        userInfo()
            .then((res) => {
                commit('SET_USER_INFO', res.data)
            })
    }
}
