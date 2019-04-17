/**
 * @file 角色管理request
 * @author lixiaobin
 */

import { postWithJson } from 'library/utils/serviceUtil'

/**
 * 添加角色
 *
 * @param {string} params.key 搜索名称
 * @param {Object} params.pageDto 分页信息
 *
 * @return {Promise}
 */
export function roleList(params) {
    return postWithJson('/role/list.json', params)
}

/**
 * 添加角色
 *
 * @param {string} params.name 角色名称
 * @param {string} params.desc 角色描述
 *
 * @return {Promise}
 */
export function add(params) {
    return postWithJson('/role/add.json', params)
}

/**
 * 删除角色
 *
 * @param {number} params.id 角色id
 *
 * @return {Promise}
 */
export function del(params) {
    return postWithJson('/role/del.json', params)
}

/**
 * 给角色设置菜单
 *
 * @param {number} params.roleId 角色id
 * @param {number} params.menuIds 菜单ids
 *
 * @return {Promise}
 */
export function roleMenuMod(params) {
    return postWithJson('/roleMenu/mod.json', params)
}

/**
 * 获取角色的菜单详情
 *
 * @param {number} params.roleId 角色id
 *
 * @return {Promise}
 */
export function roleMenuDetail(params) {
    return postWithJson('/roleMenu/detail.json', params)
}

/**
 * 编辑角色
 *
 * @param {number} params.id 角色id
 * @param {string} params.name 角色名称
 * @param {string} params.desc 角色描述
 *
 * @return {Promise}
 */
export function mod(params) {
    return postWithJson('/role/mod.json', params)
}

/**
 * 筛选字段详情汇总
 *
 * @return {Promise}
 */
export function listFilterDetails(params) {
    return postWithJson('/listFilter/details.json', params)
}

/**
 * 筛选字段详情汇总
 *
 * @return {Promise}
 */
export function listFilterMod(params) {
    return postWithJson('/listFilter/mod.json', params)
}
