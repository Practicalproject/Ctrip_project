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
    // 获取海外酒店
    getIndexHotel() {
        return Ajax.instanceTwo.get('/getIndexHotel')
    }


}