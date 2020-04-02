import Vue from "vue"
import Router from "vue-router"


/**
 * 1：一旦和路由有关了那就是页面不是组件了，需要另外的页面。
 * 2：使用()=>函数懒加载之后，会出发webpack里面代码分割，
 * 这样每个页面的js就会在一个独立的文件里面，这样就能实现懒加载。
 */

// 重写push方法，避免形容路径出现警告
const routerPush = Router.prototype.replace
Router.prototype.replace = function replace(location) {
    return routerPush.call(this, location).catch(error => error)
}

// 重写replace方法，避免形容路径出现警告
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


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
            path: '/login',
            name: 'login',
            component: () => import("./components/pages/loginPage")
        },
        {
            path: '/classsfy',
            name: 'classfy',
            component: () => import("./components/pages/classifyPage")
        },
        {
            path: '/user',
            name: 'user',
            component: () => import("./components/pages/userPage"),
            // meta: { auth: true }
            // beforeEnter: (to, from, next) => {
            // 这种了解一下就好，很少使用
            //     if (Boolean(localStorage["isLogin"])) {
            //         next()
            //     } else {
            //         next("/login")
            //     }

            // }
        }
        ,
        {
            path: '/goods',
            name: 'goods',
            component: () => import("./components/pages/goodsPage"),
            redirect: '/goods/good', // 页面重定向
            children: [
                {
                    path: 'details',  // 如何这里直接写details 不写斜杠那么路径将自动拼接成goods/details
                    name: 'good-details',
                    component: () => import("./components/pages/goodsPage/details")
                },
                {
                    path: 'good',
                    name: 'goods-good',
                    component: () => import("./components/pages/goodsPage/good")
                }
            ]
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     console.log(to)
//     if (to.meta.auth) {
//         if (Boolean(localStorage["isLogin"])) {
//             next()
//         } else {
//             next("/login")
//         }
//     }
//     next()

// })
export default router;