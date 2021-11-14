let express = require('express');
let app = express();
let cors = require('cors');
let session = require('express-session');
const history = require("connect-history-api-fallback");
app.use(history());

//设置session
app.use(session(
  {
    secret:'gufeng',
    resave: false,
    saveUninitialized: true
  }));

//引入静态文件
const path = require('path');
const staticRoot = path.resolve(__dirname,'../public');
app.use(express.static(staticRoot));

// //白名单
// const whiteList = ['null', "http://localhost:1026","http://127.0.0.1:1026","http://localhost:8080"];
// app.use(cors({
//   origin(origin,callback){
//     if (!origin) {
//       callback(null, "*");
//       return;
//     }
//     if(whiteList.includes(origin)){
//       callback(null,origin);
//     }else{
//       callback(new Error('not allowed'))
//     }
//   },
//   credentials:true
// }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, "*");
        return;
      }
      callback(null, origin);
    },
    credentials: true,
  })
);

//cookie 中间件
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//token 中间件
app.use(require('./tokenMiddleware'))

//api 日志
app.use(require('./apiLogger'));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());

app.use(require('./captchaMid'));//验证码

//接口
app.use('/api/admin',require('./api/admin'));
app.use('/api/label',require('./api/label'));
app.use('/api/sort',require('./api/sort'));
//处理错误的中间件
app.use(require('./errorMiddleware'))

const port = 1026;

app.listen(port, () => {
  console.log(`server lister on ${port}`);
})
