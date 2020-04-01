import Vue from "vue"
import Router from "vue-router"


/**
 * 1：一旦和路由有关了那就是页面不是组件了，需要另外的页面。
 * 2：使用()=>函数懒加载之后，会出发webpack里面代码分割，
 * 这样每个页面的js就会在一个独立的文件里面，这样就能实现懒加载。
 */
Vue.use(Router)
let router = new Router({
    mode: 'hash',  // 1:hash 有#号，history没有#号
    base: process.env.BASE_URL,  // 自动获取根目录路径
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./components/pages/indexPage/home")
        },
        {
            path: '/news',
            name: 'news',
            component: () => import("./components/pages/newsPage/news")
        },
        {
            path: '/goods',
            name: 'goods',
            component: () => import("./components/pages/goodsPage"),
            redirect:'/goods/good', // 页面重定向
            children:[
                {
                    path:'details',  // 如何这里直接写details 不写斜杠那么路径将自动拼接成goods/details
                    name:'good-details',
                    component:()=>import("./components/pages/goodsPage/details")
                },
                {
                    path:'good',
                    name:'goods-good',
                    component:()=>import("./components/pages/goodsPage/good")
                }
            ]
        }
    ]
})
export default router;