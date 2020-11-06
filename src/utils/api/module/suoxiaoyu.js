import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1 } from "@/utils/api/config"
export default {
    //国际港澳台特价机票
    getIndexInternational(gp) {
        return Ajax.get(baseURLv1 + '/getIndexInternational' + (gp ? '?gp=' + gp : ''))
    },
}