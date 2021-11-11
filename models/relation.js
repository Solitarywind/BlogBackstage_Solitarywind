//设置模型关系
const admin = require('./Admin');
const sort = require('./classification');
const label = require('./Label');
admin.hasMany(sort);
sort.belongsTo(admin);
admin.hasMany(label);
label.belongsTo(admin);
