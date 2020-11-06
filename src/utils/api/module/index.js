
/*
    该文件为API文件
*/

import aishuaikang from './aishuaikang'
import suoxiaoyu from './suoxiaoyu'
import huangshaofei from './huangshaofei'

import tanzhiguo from './tanzhiguo' 
import baohua from './baohua'
import tanzhiguo from './tanzhiguo'
import lvpengchao from './lvpengchao'
export default {
    ...aishuaikang,
    ...suoxiaoyu,
    ...huangshaofei,

    ...tanzhiguo,
    ...baohua,
    ...tanzhiguo,
    ...lvpengchao
}

/**
 * this.$API.index.getNavData()
 */