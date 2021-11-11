const Label  = require('../models/Label');

exports.addStore = async (obj) => {
  await Sort.create(obj);
}

exports.updateStore = async (id,obj) => {
  return await Label.update(obj, {
    where:{
      id
    }
  })
}

exports.getStore = async (userId) => {
  const result = await Label.findByPk(userId);
  if(result){
    return result.toJSON();
  }
  return  null;
}

exports.deleteStore = async (id) => {
  return await Label.destroy({
    where:{
      id
    }
  })
}
