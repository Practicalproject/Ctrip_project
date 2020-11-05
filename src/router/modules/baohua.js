const DetailSce = () => import('@/pages/DetailSce')
const IndependentTravel = () => import('@/pages/IndependentTravel')
const Group = () => import('@/pages/Group')


export default [
    {
        // 景点详情
        path: '/detailsce',
        component: DetailSce
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
]