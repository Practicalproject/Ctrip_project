const Order = () => import('@/pages/Order')
const AirlinePage = () => import('@/pages/AirlinePage')


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
]

