/**
 * @fileOverview 权限
 * @author lixiaobin
 */

export default {

    install(Vue, auths) {
        /**
         * 判读模块是否有某个功能权限
         *
         * @param {string} moduleName 模块名
         * @param {string|Array} funName 功能名称 list/add/edit/remove
         *
         * @return {Boolean} 是否具有该权限
         */
        Vue.prototype.hasAuth = function (moduleName, funName) {
            // return true
            if (this.$store.state.userInfo.id === 0) {
                return true
            }
            if (Object.prototype.toString.call(funName) === '[object Array]') {
                const multiPermission = funName.every((item) => {
                    return this.hasAuth(moduleName, item)
                })
                return multiPermission
            }
            let permissions = this.$store.state.userInfo.permissions
            if (!(permissions && Object.keys(permissions).length)) {
                return false
            }
            // 模块名不存在，视为没有权限
            if (!moduleName) {
                return 0
            }
            return (permissions[auths[moduleName]['moduleNumber']]
                & auths[moduleName][funName]) > 0
        }

        /**
         * 判读是否拥有参数列表中的权限
         *
         * @param {Array<Object>} authList
         *
         * 例如：
         *
         *   [
         *      {
         *            name: 'user',
         *            auth: 'mod'
         *        },
         *        {
         *            name: 'user',
         *            auth: 'del'
         *        }
         *   ]
         *
         *
         * @return {Boolean} 是否具有该权限
         */
        Vue.prototype.ownAuth = function (authList) {
            // 没有权限列表，返回true
            if (!authList.length) {
                return true
            }
            if (this.$store.state.userInfo.userId === 0) {
                return true
            }
            return authList.some((item) => {
                return this.hasAuth(item.name, item.auth)
            })
        }
    }
}
