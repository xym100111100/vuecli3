import config from '../../assets/js/util/conf/conf'
import { request } from '../../assets/js/util/request'
export function getNavData() {
   console.log(config.baseApi)
   return request(config.baseApi + "/suc/user?token=" + config.token)
}  