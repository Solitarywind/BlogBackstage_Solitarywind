let express = require('express');
let app = express();
let cors = require('cors');
//引入静态文件
const path = require('path');
const staticRoot = path.resolve(__dirname,'../public');
app.use(express.static(staticRoot));

//白名单
const whiteList = ['null'];
app.use(cors({
  origin(origin,callback){
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

//验证码
app.use(require('./captchaMid'));
//api 日志
app.use(require('./apiLogger'));

//接口


const port = 1026;

app.listen(port, () => {
  console.log(`server lister on ${port}`);
})
