/* 生成验证码 */
const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');

router.get('captcha',(req,res) => {
   const captcha = svgCaptcha.create({
      size:4,
      ignoreChars:'gf11',
      noise:3,
      color:true
   });

   res.session.captcha = captcha.text.toLowerCase();
   res.type('svg');
   res.status(200).send(captcha.data);
})

function validateCaptcha(req,res,next) {
    //获取用户传递的验证码
    const reqCaptcha = req.body.captcha ? req.body.captcha.toLowerCase() : '';
    if(reqCaptcha !== req.session.captcha){
       //验证码有问题
       res.send({
         code:401,
         msg:'验证码有问题'
       })
    }else{
      next();
    }
    req.session.captcha = "";
}

function captchaHandler(req,res,next) {
   if('captcha' in req.body){
     validateCaptcha(req,res,next);
   }else{
     next();
   }
}

router.post('*',captchaHandler);

module.exports = router;
