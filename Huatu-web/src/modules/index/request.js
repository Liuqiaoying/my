import { postWithJson, post } from 'library/utils/serviceUtil'

export const getMenu1 = (params) => postWithJson('/index/menu1.json', params)
export const getMenu3 = (params) => postWithJson('/index/menu3.json',params)
