import AirlinePage from '@/pages/AirlinePage'
import TrainPage from '@/pages/TrainPage'
import Hotel from '@/pages/Hotel'
import Tourism from '@/pages/Tourism'

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