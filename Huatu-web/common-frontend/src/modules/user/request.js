
import { postWithJson } from 'library/utils/serviceUtil'

/**
 * 获取用户列表
 *
 * @param {string} userName  用户姓名
 * @param {number} staffNo  用户工号
 * @param {string} mobile 电话号码
 *
 * @returns {Promise}
 */
export const userList = params => postWithJson('/user/list.json', params)

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
    return postWithJson('/userRole/mod.json', params)
}

/**
 * 用户角色详情
 *
 * @param {number} params.staffId 员工id
 *
 * @return {Promise}
 */
export function userRoleDetail(params) {
    return postWithJson('/userRole/detail.json', params)
}