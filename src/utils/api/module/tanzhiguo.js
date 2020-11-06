import Ajax from '@/utils/request'
import { baseURLapi, baseURLv1 } from "@/utils/api/config"
export default {
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
    }
}