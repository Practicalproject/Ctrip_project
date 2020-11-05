import suoxiaoyu from '@/router/modules/suoxiaoyu'
import huangshaofei from '@/router/modules/huangshaofei'
import tanzhiguo from '@/router/modules/tanzhiguo'
import lvpengchao from '@/router/modules/lvpengchao'
import aishuaikang from '@/router/modules/aishuaikang'
import baohua from '@/router/modules/baohua'

export default [
    ...suoxiaoyu,
    ...huangshaofei,
    ...tanzhiguo,
    ...lvpengchao,
    ...aishuaikang,
    ...baohua,
    {
        // 重定向
        path: '/',
        redirect: "/home"
    },
]