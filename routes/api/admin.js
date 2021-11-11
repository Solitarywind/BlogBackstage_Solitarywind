const express = require('express');
const router = express.Router();
const adminServ = require('../../services/adminService');
const { asyncHandler } = require('../getSendResult');
const jwt = require('../jwt');

//注册账号
router.post('/register',asyncHandler(async(req,res) => {
   return await adminServ.addAdmin(req.body);
}))

//登录
router.post("/login",asyncHandler( async (req,res) =>{
   const result = await adminServ.login(req.body.loginAccount,req.body.loginPwd);
   if(result){
     let value = result.id;
     let maxAge = 3600 * 24 * 7;
     //登录成功
     result.token = jwt.publish(res,maxAge,{id:value})
   };
   return result;
}));


//更新个人信息
router.put('/userinfo',async (req,res,next) => {
     let id = req.body.id;
     if(id){
       await adminServ.updateAmin(id,req.body);
       res.send ({
         code:0,
         message:'个人信息更新成功'
       })
     }else{
       res.send ( {
         code:405,
         message:'id is not undefined or null',
         data:''
       })
     }
})
//获取个人信息
router.get('/userinfo',asyncHandler(async (req,res) => {
    return await adminServ.getAdminById(req.query.userId);
}));

module.exports = router;
