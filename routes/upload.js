const express = require('express');
const router = express.Router();
let qnServ = require('../services/qiniuService');

let result = (obj,type) => {
  if(type){
    return {
      code:0,
      data:obj
    }
  }else{
    return {
      code:-1,
      data:obj
    }
  }
}
router.post('/api/upload',(req,routerRes) => {
   try {
     qnServ.upImg(req,(res) => {
          if(res.code === 0){
            routerRes.json(result(res.data,true))
          }else{
            routerRes.json(result(res.data,false))
          }
     })
   }catch (err) {
     return {
       code:-2,
       data:err
     }
   }
});

module.exports = router;
