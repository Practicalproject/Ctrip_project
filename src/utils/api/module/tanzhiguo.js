import Ajax from '@/utils/request'
import {
    baseURLv1,
    baseURLv2
} from "@/utils/api/config"
export default {

    // 注册
    loginUser(phone, password, code) {
        return Ajax({
            url: baseURLv1 + '/login/register',
            method: 'post',
            data: {
                phone,
                password,
                code
            }
        })
    },
    //目的地攻略
    refDes(qqq) {
        return Ajax({
            url: baseURLv2 + '/getIndexDestination?gp=' + qqq,
            method: 'get',
        })
    },


    // 验证码
    reqLogin(phone) {
        return Ajax({
            url: baseURLv1 + '/login/digits',
            method: 'post',
            data: {
                phone
            }
        })
    },

    // 登录成功请求登录数据
    reqLoginData(){
        return Ajax({
            url:baseURLv1+'/login/verify',
            method:'post'
        })
    }

}