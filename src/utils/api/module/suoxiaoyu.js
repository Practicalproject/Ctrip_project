import Ajax from '@/utils/request'
import {
    baseURLapi,
    baseURLv1,
    baseURLv2
} from "@/utils/api/config"
export default {
    //国际港澳台特价机票
    getIndexInternational(gp) {
        return Ajax.get(baseURLv2 + '/getIndexInternational' + (gp ? '?gp=' + gp : ''))
    },
    // 首页第一页热门
    getIndexHot(diqu) {
        return Ajax.get(baseURLv2 + '/getIndexHot?diqu=' + diqu)
    },
    //国内特价机票
    getIndexDomestic(gp) {
        return Ajax.get(baseURLv2 + '/getIndexDomestic?gp=' + gp)
    },
}