import axios from "axios"

export function request(url, method = "get", data = {}, config = {}) {
   //这种e6的写法method="get" 等同于es5 的method=method || "get"
   return axiosRequest(url, method, data, config);
}

function axiosRequest(url, method, data, config) {
   console.log("请求post", url, method, data, config)
   if (method.toLowerCase() === "post") {
      if (data instanceof Object) {
         let params = new URLSearchParams();
         for (let key in data) {
            params.append(key, data[key]);
         }
         data = params;
      }
   } else if (method.toLowerCase() === "file") {
      console.log("请求file", url, method, data, config)

      method = "post";
      if (data instanceof Object) {
         let params = new FormData();
         for (let key in data) {
            params.append(key, data[key]);
         }
         data = params;
      }
   }

   let axiosConfig = {
      url: url,
      method: method.toLowerCase(),
      data: data
   }
   if(config instanceof Object){
      for(let key in config){
         axiosConfig[key] = config[key]
      }
   }
   return axios(axiosConfig);
}