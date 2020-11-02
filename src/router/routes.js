import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'

export default [
    {
        path:'/airlinepage',
        component:AirlinePage
    },
    {
        path:'/trainPage',
        component:TrainPage
    },
    {
        // 旅馆
        path:'/hotel',
        component:Hotel
    },
    {
        // 旅游
        path:'/tourism',
        component:Tourism
    },
]