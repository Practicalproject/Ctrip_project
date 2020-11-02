import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'
import Hotel from '@/pages/Hotel'
import Tourism from '@/pages/Tourism'
import IndependentTravel from '@/pages/IndependentTravel'


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
        path: '/trainPage',
        component: TrainPage
    },
    {
        // bh--自由行
        path: '/independenttravel',
        component: IndependentTravel
    },
    {
        // 旅馆
        path:'/hotel',
        component:Hotel
    },
    /**
     * 火车票路由组件
     * author:suoxiaoyu
     */
    {
        // 旅游
        path:'/tourism',
        component:Tourism
    },
]