import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1, baseURLv2 } from "@/utils/api/config"

export default {
    // 获取导航数据
    getNavData() {
        return Ajax.post(baseURLapi + "/zb_users/plugin/haloapi/api.php?act=qryCategory", {})
    },
    // //  获取首页全部国家列表
    // getIndexCountry() {
    //     return Ajax.get(baseURLv1 + "/getIndexCountry")
    // },

    //  登陆
    reqlogin(email, pwd) {
        return Ajax.post(baseURLv1 + "/login", {
            email,
            pwd
        })
    },
}