// import axios from 'axios'

// const defaultConfig = {
//     timeout: 5000,
//     baseUrl: ''
// }

// const axiosInstance = axios.create(defaultConfig)

// // 请求拦截
// axiosInstance.interceptors.request.use(config => {
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// // 响应拦截
// axiosInstance.interceptors.response.use(config => {
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// // 封装请求
// function httpRequestGet(url, params) {
//     return axiosInstance.get(url, params).then(res => res.data).catch()
// }

// function httpRequestPost(url, params) {
//     return axiosInstance.post(url, params).then(res => res.data).catch()
// }

// export default {
//     httpRequestGet,
//     httpRequestPost
// }

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
    timeout: 5000,
    baseUrl: ''
}

class Http {
    constructor() {
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }

    private static axiosInstance = axios.create(defaultConfig)

    // 请求拦截
    private httpInterceptorsRequest() {
        Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }

    // 响应拦截
    private httpInterceptorsResponse() {
        Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
            return response
        }, err => {
            return Promise.reject(err)
        })
    }

    public httpRequestGet<T>(url:string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }

    public httpRequestPost<T>(url:string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.post(url, params).then(res => res.data).catch()
    }
}

export const http = new Http()