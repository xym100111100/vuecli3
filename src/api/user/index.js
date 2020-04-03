import config from '../../assets/js/util/conf/conf'
import { request } from '../../assets/js/util/request'
export function login(data) {
   return request(config.baseApi + "/suc/user/user-login", 'post', data)
}  