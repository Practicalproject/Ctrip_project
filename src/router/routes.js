import suoxiaoyu from './modules/suoxiaoyu'
import huangshaofei from './modules/huangshaofei'
import tanzhiguo from './modules/tanzhiguo'
import lvpengchao from './modules/lvpengchao'
import aishuaikang from './modules/aishuaikang'
import baohua from './modules/baohua'

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