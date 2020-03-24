# vuecli3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 文件结构

### 测试生产环境

### 安装serve服务器
npm install -g serve

### 运行方式一

serve -s dist

### 运行方式二
 cd dist
 serve



### .evv 配置全局变量和区分开发者环境和生产环境
在根目录下创建.env文件
内容
VUE_APP_URL=http://www.baidu.com
注意命名规范，必须以VUE_APP_开头。

开发者全局变量
在根目录下创建.env.development文件
内容
VUE_APP_URL="http://www.baidu.com"

生产环境全局变量

在根目录下创建.env.production
内容
VUE_APP_URL=http://www.baidu.com



// 获取环境变量一定要在生命周期钩子函数里面，使用process.env(这个是固定写法，系统关键词，死记硬背就行。)
// 注意生产和开发的变量的名字要一样