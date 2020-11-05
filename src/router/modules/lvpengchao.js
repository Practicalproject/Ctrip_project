const Tourism = () => import('@/pages/Tourism')
const Hotel = () => import('@/pages/Hotel')

export default [
    {
        // 旅游页
        path: '/tourism',
        component: Tourism
    },
    {
        // 酒店
        path: '/hotel',
        component: Hotel
    },
]