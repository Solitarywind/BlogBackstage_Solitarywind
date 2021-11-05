const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../logger');

//数据库连接
const connect = new Sequelize('blogWind','root','rl1026ling',{
  host:'localhost',
  dialect:'mysql',
  logging:(msg) => {
    sqlLogger.info(msg)
  }
});

module.exports = connect;
