import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"
export default {
    // 获取海外酒店
    // getIndexHotel() {
    //     return Ajax.get(baseURLv1 + '/getIndexHotel')
    // },
    // 热门
    // getIndexHot() {
    //     return Ajax.get(baseURLv1 + '/getIndexHot')
    // },
    // 热门目的地
    // getIndexPlay() {
    //     return Ajax.get(baseURLv1 + '/getIndexPlay')
    // },
    // 全球购
    // getGlobalPurchasing() {
    //     return Ajax.get(baseURLv1 + '/getGlobalPurchasing')
    // },
    // 境外租车
    // getIndexCarRental() {
    //     return Ajax.get(baseURLv1 + '/getIndexCarRental')
    // },
    // 目的地攻略
    // getDestinationGuide() {
    //     return Ajax.get(baseURLv1 + '/getDestinationGuide')
    // },

    //#region 当地玩乐板块
    // 需要两个参数，Territory 此参数区分是否为出境，境内数据(非必须参数)，gp 为必须携带参数
    // /getIndexPlaylocal		出境
    // /getIndexPlaylocal Territory	境内
    getIndexPlay(Territory, gp) {
        return Ajax.get(baseURLv2 + `/getIndexPlaylocal${Territory}?gp=` + gp)
    }
    //#endregion
    // getIndexPlaylocal(gp) {
    //     return Ajax.get(baseURLv2 + '/getIndexPlaylocal?gp=' + gp)
    // }
}