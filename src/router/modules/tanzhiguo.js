const useCart = () => import('@/pages/useCart')
const cartBoat = () => import('@/pages/cartBoat')
const HuangPuJiang = () => import('@/pages/Tickets/HuangPuJiang')


export default [
    {
        // 用车页
        path: '/usecart',
        component: useCart
    },
    {
        // 车船页
        path: '/cartboat',
        component: cartBoat
    },
    {
        // 黄浦江
        path: '/huangpujiang',
        component: HuangPuJiang
    },
]