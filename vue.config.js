/**
 * 1：不生效很可能是写错了单词，比如说少了s
 * 2: 这里的路径是服务器启动时候的路径，比说路径是192.168.1.202:8000/server/,那么该路径就是192.168.1.202:8000/server/
 * 而不是主机的路径。
 */

module.exports = {
    publicPath: '/vue/', // 配置根目录,上传服务器才需要配置这个
    outputDir: 'dist',
    lintOnSave: false,
    productionSourceMap: true,
}
