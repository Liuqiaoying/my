/**
 * @file 公用接口
 *
 */

import { postWithJson } from 'library/utils/serviceUtil'

/**
* 获取用户信息
*
* @return {Promise}
*/
export const userInfo = (params) => postWithJson(`/info.json`, params)

/**
 * 获取枚举信息
 *
 * @return {Promise}
 */
export const enumList = (params) => postWithJson('/enumList.json', params)
