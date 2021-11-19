//同步模型
require("./Admin");
require('./Sort');
require('./Label');
const sequelize = require('./Connect');
sequelize.sync({alter:true}).then(() => {
   console.log('模型同步成功')
})
