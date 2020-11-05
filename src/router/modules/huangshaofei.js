const Tickets = () => import('@/pages/Tickets')
const Strategy = () => import('@/pages/Strategy')

export default[
    {
        // 门票
        path: '/tickets',
        component: Tickets,
    },
    {
        // 攻略
        path: '/strategy',
        component: Strategy
    },
]