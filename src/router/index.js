//1引入并声明使用
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //声明使用

import routes from './routes'

let router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        //水平垂直坐标，期望滚动到哪个位置，跳转的第一下到哪个位置我们不能控制，但之后我们能控制
        return {
            x: 0,
            y: 0
        }
    }
})


export default router