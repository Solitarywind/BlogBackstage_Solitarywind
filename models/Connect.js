const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../logger');

//数据库连接 Sequelize(数据库名称,账号,密码)
const connect = new Sequelize('blogWind','root','112233',{
  host:'localhost',
  dialect:'mysql',
  logging:(msg) => {
    sqlLogger.info(msg)
  }
});

module.exports = connect;
