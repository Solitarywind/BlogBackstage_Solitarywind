 # BlogBackstage_Solitarywind

 ```
 npm install
 ```

 ### Compiles and hot-reloads for development
 ```
 npm run serve
 ```

 ### Compiles and minifies for production
 ```
 npm run build
 ```

 ### Lints and fixes files
 ```
 npm run lint
 ```

 ### Customize configuration
 See [Configuration Reference](https://cli.vuejs.org/config/).

 ### 说明

 这是一个 个人博客的后台项目 --Solitarywind 
     
     技术架构 
      页面  vue + element-ui + axios + vueRouter + vueX
      后端  node -> express框架  jwt登录验证    
      数据库  MySQL  validate数据库验证
      语法检查  Elint  npm run lint
      单元测试  jest 
      
     Css预编译器  SCSS
     
     第三方插件 
          /**可以用 markdown 语法 的 富文本插件**/
          mavon-editor   npm install mavon-editor --save
          /** vuex 数据持久化 **/
          vuex-persistedstate   npm install vuex-persistedstate --save
     
     项目结构
        client  vue工程代码（页面源码）
        logs    服务日志（sql日志 和 api 请求日志）
        models  数据库连接 和 构建  
        public  vue（npm run build）打包后的静态页面
        routes  express路由 (中间件)
        service 服务端访问构建
        logger.js  日志设置  

 富文本插件插件具体地址 https://github.com/hinesboy/mavonEditor

 富文本插件插件演示地址 http://www.mavoneditor.com/

