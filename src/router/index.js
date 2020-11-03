//1引入并声明使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//声明使用

import routes from './routes'

let router = new VueRouter({
    mode:'history',
    routes
})


export default router