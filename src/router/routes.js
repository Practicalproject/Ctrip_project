const AirlinePage = () => import('@/pages/AirlinePage')
const Order = () => import('@/pages/Order')
const Hotel = () => import('@/pages/Hotel')
const Tourism = () => import('@/pages/Tourism')
const IndependentTravel = () => import('@/pages/IndependentTravel')

const Tickets = () => import('@/pages/Tickets')
const Strategy = () => import('@/pages/Strategy')
const Home = () => import('@/pages/Home')
const Group = () => import('@/pages/Group')

const useCart = () => import('@/pages/useCart')
const cartBoat = () => import('@/pages/cartBoat')
const Login = () => import('@/pages/Login')
const DetailSce = () => import('@/pages/DetailSce')

export default [{
        // 用车
        path: '/usecart',
        component: useCart
    },
    {
        // 景点详情
        path: '/detailsce',
        component: DetailSce
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
    // 登陆
    {
        path: "/login",
        component: Login
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