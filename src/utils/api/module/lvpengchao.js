import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"
export default {
    // 这里写接口
    // 境外租车
    getIndexOutside(gp) {
        return Ajax.get(baseURLv2 + '/getIndexOutside?gp=' + (gp ? gp : ''))
    },
    // 当地玩乐
    getIndexPlaylocal(gp) {
        return Ajax.get(baseURLv2 + '/getIndexPlaylocal?gp=' + (gp ? gp : ''))
    },
    // 境外接送机
    getIndexPickup(gp) {
        return Ajax.get(baseURLv2 + '/getIndexPickup?gp=' + (gp ? gp : ''))
    },
}