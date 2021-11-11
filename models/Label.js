const connect = require('./Connect');
const { DataTypes } = require('sequelize');

const label = connect.define('Label',{
  name:{
    type:DataTypes.STRING,
    allowNull:true
  }
},{
  createdAt:'creatTime',
  updatedAt:'updateTime',
})

module.exports = label;

