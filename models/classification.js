const connect = require('./Connect');
const { DataTypes } = require('sequelize');

const Sort = connect.define('Sort',{
     name:{
       type:DataTypes.STRING,
       allowNull:true
     }
},{
  createdAt:'creatTime',
  updatedAt:'updateTime',
})

module.exports = Sort;
