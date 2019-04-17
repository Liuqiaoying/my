/**
 * @file 菜单管理api
 * @author lixiaobin
 */


import { postWithJson } from 'library/utils/serviceUtil'

/**
 * 菜单树
 */
export function getList() {
    return postWithJson('/menu/list.json', {})
}

/**
 * 编辑菜单
 *
 * @param {number} params.name 菜单名称
 * @param {number} params.pid 菜单父级id
 * @param {number} params.level 层级
 * @param {number} params.remark 备注
 * @param {number} params.permissions 权限
 *
 * @return {Promise}
 */
export function add(params) {
    return postWithJson('/menu/add.json', {
        name: params.name,
        pid: params.pid,
        level: params.level,
        remark: params.remark,
        permissions: params.permissions
    })
}

/**
 * 编辑菜单
 *
 * @param {number} params.id 菜单id
 * @param {number} params.name 菜单名称
 * @param {number} params.pid 菜单父级id
 * @param {number} params.level 层级
 * @param {number} params.remark 备注
 * @param {number} params.permissions 权限
 *
 * @return {Promise}
 */
export function mod(params) {
    return postWithJson('/menu/mod.json', {
        id: params.id,
        name: params.name,
        pid: params.pid,
        level: params.level,
        remark: params.remark,
        permissions: params.permissions
    })
}

/**
 * 删除菜单
 *
 * @param {number} params.id 删除id
 *
 * @return {Promise}
 */
export function del(params) {
    return postWithJson('/menu/del.json', {
        id: params.id
    })
}

/**
 * 系统模块
 *
 * @return {Promise}
 */
export function showModules() {
    return postWithJson('/permission/list.json', {})
}
