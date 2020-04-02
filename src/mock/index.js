import Mock from "mockjs";
/**
 * 只要在页面导入改模块那都可以拦截到所有请求
 */
Mock.mock("api/news", "get", {
    "data|10": {
        "number|+1": Mock.Random.integer(2, 15),
        "title|+1": Mock.Random.cword(4, 15),
        "array": Mock.Random.range(3, 10),
        'name': '@cname',
    }
})

Mock.mock("/api/login", "post", (payload) => {
    console.log(payload)
    return {
        stetus: "200",
        massage: "登录成功",
        result: {
            username:'小明',
            password:123456
        }
    }
    // return Mock.mock({
    //     status:Mock.Random.boolean(),
    //     code:Mock.Random.natural( 1000, 5000 )
    // })
})
