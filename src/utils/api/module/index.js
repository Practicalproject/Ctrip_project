import Ajax from '../../request'

/*
    该文件为首页API文件
*/

export default {
    // 获取导航数据
    getNavData() {
        return Ajax.instance.post("/zb_users/plugin/haloapi/api.php?act=qryCategory", {})
    },
    //  获取首页全部国家列表
    getIndexCountry() {
        return Ajax.instanceTwo.get("/getIndexCountry")
    },

    //  获取首页全部国家列表
    reqlogin(email, pwd) {
        return Ajax.instanceTwo.post("/login", { email, pwd })
    },
    // 获取海外酒店
    getIndexHotel() {
        return Ajax.instanceTwo.get('/getIndexHotel')
    },
    // 热门
    getIndexHot() {
        return Ajax.instanceTwo.get('/getIndexHot')
    },

    getIndexInternational() {
        return Ajax.instanceTwo.get('/getIndexInternational')
    },
    // 热门目的地
    getIndexPlay() {
        return Ajax.instanceTwo.get('/getIndexPlay')
    }
}