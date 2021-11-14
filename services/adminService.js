const Admin = require('../models/Admin');
const md5 = require('md5');
const validate = require('validate.js')
let attributes =  ['id','loginAccount','avator','nickName','sex','token'];

//注册
exports.addAdmin = async (adminObj) =>  {
  adminObj.loginPwd = md5(adminObj.loginPwd);
  const rule = {
    loginAccount:{
      presence:{
        allowEnpty: false
      },
      type:'string',
      length:{
        minimun:1,
        maximum:10
      }
    },
    loginPwd:{
      presence: {
        allowEmpty: false,
      },
      type: "string",
    }
  };
  await validate.async(adminObj,rule)
  await Admin.create(adminObj);
  return {
    code:0,
    msg:'注册成功',
    data:''
  };
};

//登录
exports.login = async (loginAccount,loginPwd) => {
   loginPwd = md5(loginPwd);
   const result = await Admin.findOne({
      where:{
        loginAccount,
        loginPwd
      },
     attributes,
   });
   if(result && result.loginAccount === loginAccount){
       return  result.toJSON();
   }else{
     return {
       code:'402',
       msg:'账号或密码错误'
     }
   }
   // return null;
}

//获取个人信息
exports.getAdminById = async (id) => {
    const result = await Admin.findByPk(id,{
      attributes,
    });
    if(result){
      return  result.toJSON();
    };
    return null;
}

//更新个人信息
exports.updateAmin = async (id,adminObj) => {
  if (adminObj.loginPwd) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
  }
  return  await Admin.update(adminObj, {
     where: {
       id
     }
   });
}

//注销个人账号
exports.deleteAccount = async (adminId) => {
  return await Admin.destroy({
      where: {
        id: adminId
      }
    });
}


