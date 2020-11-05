import Axios from 'axios'

let instance = Axios.create({
    baseURL: "/api",
    timeout: 20000
})

let instanceTwo = Axios.create({
    baseURL: "/v1",
    timeout: 20000
})

// 请求拦截器
instance.interceptors.request.use((confit) => {
    return confit
})
// 响应拦截器
instance.interceptors.response.use((value) => {
    return value.data
}, (error) => {
    return Promise.reject(error.messages)
})

// 请求拦截器
instanceTwo.interceptors.request.use((confit) => {
    return confit
})
// 响应拦截器
instanceTwo.interceptors.response.use((value) => {
    return value.data
}, (error) => {
    return Promise.reject(error.messages)
})

export default {
    instance,
    instanceTwo
}