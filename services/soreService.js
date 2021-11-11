const Sort  = require('../models/classification');

exports.addStore = async (obj) => {
     await Sort.create(obj);
}

exports.updateStore = async (id,obj) => {
    return await Sort.update(obj, {
       where:{
         id
       }
  })
}

exports.getStore = async (userId) => {
   const result = await Sort.findByPk(userId);
   if(result){
     return result.toJSON();
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
