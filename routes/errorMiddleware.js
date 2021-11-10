//处理错误的中间件
const getMsg = require('./getSendResult');
const multer = require('multer');

module.exports = (err,req,res,next) => {
  console.log(err);
   if(err){
     if(err instanceof  multer.MulterError){
       res.status(200).send(getMsg.getErr(err.msg));
       return;
     }
     //发生错误
     const errObj = err instanceof Error ? err.msg : err;
     res.status(500).send(getMsg.getErr(errObj))
   }else{
     next()
   }
}
