import axios from 'axios'

export function request(config = {}) {
   let service = axios.create({
     // baseURL: "http://192.168.8.106:9750"
   })

   service.interceptors.request.use(function (config) {
      console.log(config)
      if(config.method === "post"){
         config.data = {
            wxOpenid: config.wxOpenid
         }
      }

      // 这里在这里做token、
      config.headers ={
         token:"aaaa"
      }
      return config;
   }, function (error) {
      return Promise.reject(error);
   });

   service.interceptors.response.use(function (response) {
      console.log("响应拦截，通过相应跳转到相应的页面window.location.href或路由跳转")
      return response;
   }, function (error) {
      return Promise.reject(error);
   });


   return service.request(config).then(res => res)
}