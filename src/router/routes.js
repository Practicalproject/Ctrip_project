import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'
import Hotel from '@/pages/Hotel'
import Tourism from '@/pages/Tourism'
import IndependentTravel from '@/pages/IndependentTravel'

import Tickets from '@/pages/Tickets'
import Strategy from '@/pages/Strategy'
import Home from '@/pages/Home'

export default [
    /**
     * 飞机票路由组件
     * author:suoxiaoyu
     */
    {
        path: '/airlinepage',
        component: AirlinePage
    },
    {
        // bh--自由行
        path: '/independenttravel',
        component: IndependentTravel
    },
    {
        // 旅馆
        path: '/hotel',
        component: Hotel
    },
    /**
     * 火车票路由组件
     * author:suoxiaoyu
     */
    {
        // 旅游
        path: '/tourism',
        component: Tourism
    },
    {
        path: '/trainPage',
        component: TrainPage
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