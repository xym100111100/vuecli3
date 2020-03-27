/**
 * 1：不生效很可能是写错了单词，比如说少了s
 * 2: 这里的路径是服务器启动时候的路径，比说路径是192.168.1.202:8000/server/,那么该路径就是192.168.1.202:8000/server/
 * 而不是主机的路径。
 */

module.exports = {
    publicPath: '/', // 配置根目录,上传服务器才需要配置这个
    outputDir: 'dist',
    lintOnSave: false,
    productionSourceMap: true,
    devServer: {
        open: false, // 是否打开浏览器
        host: '0.0.0.0', // 主机0.0.0.0支持局域网地址
        port: 5900, // 端口
        https: false, // 是否启动https
        proxy: {
            '/getbyid': {
                //要访问的跨域的域名，跨域的本质是不同协议|不同域名|不同端口
                //最后访问会变成 http://192.168.1.16:9101/onl/onlinespec/getbyid(这里接着拼接view过来的路径和参数)
                target: 'http://192.168.1.16:9101/onl/onlinespec',
                ws: true, // 是否启用websockets
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                changOrigin: true,
                pathRewrite:{
                    '^/getbyid':''  // 这里会将/getbyid替换成空格，最后的访问路径变为 http://192.168.1.16:9101/onl/onlinespec(这里接着拼接view过来的路径和参数)
                }
            }
        }
    },
    configureWebpack:{
        devtool:'source-map' //配置开发者环境的ｓｏｕｒｃｅ用于断点调试
    }

}
