import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"
export default {
    // 获取海外酒店
    getIndexHotel() {
        return Ajax.get(baseURLv1 + '/getIndexHotel')
    },
    // 热门
    getIndexHot() {
        return Ajax.get(baseURLv1 + '/getIndexHot')
    },
    // 热门目的地
    getIndexPlay() {
        return Ajax.get(baseURLv1 + '/getIndexPlay')
    },
    // 全球购
    getGlobalPurchasing() {
        return Ajax.get(baseURLv1 + '/getGlobalPurchasing')
    },
    // 境外租车
    getIndexCarRental() {
        return Ajax.get(baseURLv1 + '/getIndexCarRental')
    },
    // 目的地攻略
    getDestinationGuide() {
        return Ajax.get(baseURLv1 + '/getDestinationGuide')
    }
}