import Ajax from '../request'

export default {
    // 获取导航数据
    getNavData() {
        return Ajax.post("/zb_users/plugin/haloapi/api.php?act=qryCategory", {})
    }
}