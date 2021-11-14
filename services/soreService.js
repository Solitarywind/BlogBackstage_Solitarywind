const Sort  = require('../models/classification');
const Admin = require('../models/Admin');
const validate = require('validate.js');
const { helper } = require('../util/propertyHelper')
exports.addStore = async (obj) => {
     obj = helper(obj,'name','userId');
     validate.validators.adminExits = async (value) => {
        const a = await Admin.findByPk(value);
        if(a){
          return ;
        }
        return "is not exist";
      };
     await Sort.create(obj);
     const rule = {
        name:{
          presence:{
            allowEmpty: false
          }
        },
       userId:{
         presence:true,
         numericality:{
           onlyInteger: true,
           strict: false
         },
         adminExits:true
       }
     };
     await validate.async(obj,rule);
     await Sort.create(obj);
     return {
       code:0,
       msg:'分类添加成功',
       data:''
     }
}

exports.updateStore = async (id,obj) => {
    return await Sort.update(obj, {
       where:{
         id
       }
  })
}

exports.getStore = async (userId) => {
   const result = await Sort.findAll({
     where:{
       userId
     }
   });
   if(result){
     return result;
   }
   return  null;
}

exports.deleteStore = async (id) => {
  return await Sort.destroy({
     where:{
       id
     }
  })
}
