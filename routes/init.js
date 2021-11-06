let express = require('express');
let app = express();
let cors = require('cors');

//设置session
app.use(require('express-session')({secret:'gufeng'}));

//引入静态文件
const path = require('path');
const staticRoot = path.resolve(__dirname,'../public');
app.use(express.static(staticRoot));




//白名单
const whiteList = ['null', "http://localhost:1026"];
app.use(cors({
  origin(origin,callback){
    if (!origin) {
      callback(null, "*");
      return;
    }
    if(whiteList.includes(origin)){
      callback(null,origin);
    }else{
      callback(new Error('not allowed'))
    }
  },
  credentials:true
}));

//cookie 中间件
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(require('./captchaMid'));//验证码

//api 日志
app.use(require('./apiLogger'));

//接口


const port = 1026;

app.listen(port, () => {
  console.log(`server lister on ${port}`);
})
