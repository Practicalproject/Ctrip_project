import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"
export default {
    // 这里写接口
    getIndexHotel(dq) {
        return Ajax.get(baseURLv2 + '/getIndexHotel?dq=' + dq)
    }
}