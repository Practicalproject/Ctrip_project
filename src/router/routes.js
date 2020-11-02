import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'
import Tickets from '@/pages/Tickets'
import Strategy from '@/pages/Strategy'

export default [
    {
        path: '/airlinepage',
        component: AirlinePage
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

]