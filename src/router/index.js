//1引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)//声明使用

import routes from './routes'

const router = new VueRouter({
    mode:'history',
    routes
})


export default router