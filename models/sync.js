//同步模型
require("./Admin");

const sequelize = require('./Connect');
sequelize.sync({alter:true}).then(() => {
   console.log('模型同步成功')
})
