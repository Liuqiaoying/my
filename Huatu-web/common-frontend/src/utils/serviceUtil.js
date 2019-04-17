/**
 * @file Overview service util
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */


import axios from 'axios'
let querystring = require('querystring')
let showErrTip = true
import Cookies from 'js-cookie'

axios.interceptors.request.use(function (config) {
    // 防csrf 攻击
    let csrfToken = Cookies.get('csrfToken')
    if (csrfToken) {
        config.headers['x-csrf-token'] = csrfToken
    }
    return config
})

/**
 * 添加ajax response interceptor
 */
axios.interceptors.response.use(function (res) {
    let data = res.data
    let code = data.code

    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if (code === 0 || isNaN(code)) {
        return data
    } else {
        // 未登录状态
        if (code === 1000000500) {
            if (data.data && data.data.redirectUrl) {
                let url = window.location.href
                if (url.indexOf('huatu') > -1) {
                    window.location.href = data.data.redirectUrl + encodeURIComponent(url)
                }
            } else {
                toast(data.msg, 'error')
            }
            return Promise.reject(data)
        }
        if (code === 1000000400) {
            toast(data.msg, 'error')
        }
        if (code === 2000000800) {
            toast(data.msg, 'error')
        }
        if (showErrTip) {
            toast(data.msg || '系统异常', 'error')
        }
        return Promise.reject(data)
    }
}, function (error) {
    let response = error.response
    let data = response.data
    if (!response) {
        toast('无网络链接，请检查后重试', 'error')
    } else {
        toast(data && data.msg ? data.msg : '系统异常', 'error')
    }
    return Promise.reject(error)
})

/**
 * 发送 post 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function post(url, data = {}) {
    return axios.post(url, querystring.stringify(data))
}

export async function postWithJson(url, data = {}) {
    return axios.post(url, data)
}

/**
 * post form参数请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function form(url, data = {}) {
    return axios.post(url,
        querystring.stringify(data),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )
}

/**
 * 发送 delete 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function del(url, data = {}) {
    return axios.delete(url, {
        params: data
    })
}

/**
 * 发送 get 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function get(url, data = {}) {
    return axios.get(url, {
        params: data
    })
}

/**
 * 发送 update 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function put(url, data = {}) {
    return axios.put(url, data)
}
