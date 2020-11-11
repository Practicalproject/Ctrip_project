const Order = () => import('@/pages/Order')
const AirlinePage = () => import('@/pages/AirlinePage')
const More = () => import('@/pages/More')


export default [
    {
        // 订单页
        path: '/order',
        component: Order
    },
    {
        // 飞机票页
        path: '/airlinepage',
        component: AirlinePage
    },
    {
        // 飞机票页
        path: '/more',
        component: More
    },
]

