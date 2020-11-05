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
    }
}