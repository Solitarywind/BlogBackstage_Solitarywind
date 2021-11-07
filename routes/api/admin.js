const express = require('express');
const router = express.Router();
const adminServ = require('../../services/adminService');
const { asyncHandler } = require('../getSendResult');
const jwt = require('../jwt');

//登录
router.post("/login",asyncHandler( async (req,res) =>{
   const result = await adminServ.login(req.body.loginAccount,req.body.loginPwd);
   if(result){
     let value = result.id;
     //登录成功
     result.token = jwt.publish(res,undefined,{id:value})
   };
   return result;
}));

//更新个人信息
router.put('/userinfo',asyncHandler(async (req,res,next) => {
     return await adminServ.updateAmin(req.params.id,req.body)
}))
//获取个人信息
router.get('/userinfo',asyncHandler(async (req,res) => {
    return await adminServ.getAdminById(req.userId);
}));

module.exports = router;
