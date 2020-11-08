import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"
export default {
    // 这里写接口
    // 获取第二板块 海外酒店 数据
    getIndexHotel(dq) {
        return Ajax.get(baseURLv2 + '/getIndexHotel?dq=' + dq)
    },

    // 获取第二板块 海外民宿+短租 数据
    getIndexRentals() {
        return Ajax.get(baseURLv2 + '/getIndexRentals')
    },

    // 自由行
    getIndependentOverseas() {
        return Ajax.get(baseURLv2 + '/getIndependentOverseas')
    },


    // 周边游
    getIndependentTerritory() {
        return Ajax.get(baseURLv2 + '/getIndependentTerritory')
    }
}