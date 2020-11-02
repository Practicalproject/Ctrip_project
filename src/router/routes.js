import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'
import IndependentTravel from '@/pages/IndependentTravel'


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
        // bh--自由行
        path: '/independenttravel',
        component: IndependentTravel
    },
]