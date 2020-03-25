import Mock from "mockjs";
Mock.mock("api/news", "get", {
    "data|10": {
        "number|+1": Mock.Random.integer(2, 15),
        "title|+1": Mock.Random.cword(4, 15),
        "array":Mock.Random.range(3, 10),
        'name': '@cname',
    }
})

Mock.mock("/api/login","",(payload)=>{

    console.log(payload)
    // return{
    //     stetus:"200",
    //     massage:"登录成功"
    // }
    return Mock.mock({
        status:Mock.Random.boolean(),
        code:Mock.Random.natural( 1000, 5000 )
    })
})
