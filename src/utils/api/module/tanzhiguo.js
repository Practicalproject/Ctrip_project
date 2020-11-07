import Ajax from '@/utils/request'
import { baseURLv1 ,baseURLv2} from "@/utils/api/config"
export default {

    // 注册
    loginUser(email,pwd,nick_name=''){
        return Ajax({
            url:baseURLv1+'/register',
            method:'post',
            data:{
                email,
                pwd,
                nick_name
            }
        })
    },
    //目的地攻略
    refDes(qqq){
        return Ajax({
            url:baseURLv2+'/getIndexDestination?gp='+qqq,
            method:'get',
        })
    },


    // 验证码
    reqLogin(phone){
        return Ajax({
            url:baseURLv1+'/login/digits',
            method:'post',
            data:phone
        })
    }
    
}