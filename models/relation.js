//设置模型关系
const admin = require('./Admin');
const sort = require('./Sort');
const label = require('./Label');
admin.hasMany(sort,{
  foreignKey:'userId'
});
sort.belongsTo(admin,{
  as:'user'
});
admin.hasMany(label,{
  foreignKey:'userId'
});
label.belongsTo(admin,{
  as:'user',
});
