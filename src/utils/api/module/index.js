
/*
    该文件为API文件
*/


// 上面两个变量为了减少拦截器

import aishuaikang from './aishuaikang'
import suoxiaoyu from './suoxiaoyu'
import huangshaofei from './huangshaofei'
import tanzhiguo from './tanzhiguo' 
export default {
    ...aishuaikang,
    ...suoxiaoyu,
    ...huangshaofei,
    ...tanzhiguo
}
