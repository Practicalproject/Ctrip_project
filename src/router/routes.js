import AirlinePage from '@/pages/AirlinePage'
import Order from '@/pages/Order'
import Hotel from '@/pages/Hotel'
import Tourism from '@/pages/Tourism'
import IndependentTravel from '@/pages/IndependentTravel'

import Tickets from '@/pages/Tickets'
import Strategy from '@/pages/Strategy'
import Home from '@/pages/Home'
import Group from '@/pages/Group'


import useCart from '@/pages/useCart'
import cartBoat from '@/pages/cartBoat'

export default [{
        // 用车
        path: '/usecart',
        component: useCart
    },
    {
        // 车船
        path: '/cartboat',
        component: cartBoat
    },
    {
        /**
         * 飞机票路由组件
         * author:suoxiaoyu
         */
        path: '/airlinepage',
        component: AirlinePage
    },
    {
        /**
         * 我的订单路由组件
         * author:suoxiaoyu
         */
        path: '/order',
        component: Order
    },
    {
        // bh--自由行
        path: '/independenttravel',
        component: IndependentTravel
    },
    {
        // bh--跟团游
        path: "/group",
        component: Group
    },
    {
        // 酒店
        path: '/hotel',
        component: Hotel
    },
    {
        // 旅游
        path: '/tourism',
        component: Tourism
    },
    {
        // 门票
        path: '/tickets',
        component: Tickets
    },
    {
        // 攻略
        path: '/strategy',
        component: Strategy
    },
    // 首页
    {
        path: "/home",
        component: Home
    },
    // 重定向
    {
        path: '/',
        redirect: "/home"
    }


]