const Label  = require('../models/Label');
const Admin = require("../models/Admin");
const validate = require('validate.js')
const { helper } = require('../util/propertyHelper');
exports.addLabel = async (obj) => {
  obj = helper(obj,'name','userId');
  validate.validators.adminExits = async (value) => {
    const a = await Admin.findByPk(value);
    if(a){
      return ;
    }
    return "is not exist";
  };

  const rule = {
     //验证规则
    name:{
      presence: {
        allowEnpty:false
      },
      type:"string"
    },
    userId:{
      presence:true,
      numericality:{
        onlyInteger: true,
        strict: false
      },
      adminExits:true
    }
  }
  await validate.async(obj,rule);
  await Label.create(obj);
  return  {
    code:0,
    msg:'添加标签成功',
    data:''
  }
}


exports.getLabel = async (userId) => {
  const result = await Label.findAll({
    where:{
      userId
    }
  });
  if(result){
    return result;
  }
  return [];
}

exports.deleteLabel = async (id) => {
  return await Label.destroy({
    where:{
      id
    }
  })
}
