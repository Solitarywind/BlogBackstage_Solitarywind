const connect = require('./Connect');
const { DataTypes } = require('sequelize');
//创建模型
const Admin = connect.define('Admin',{
   loginAccount:{
      type: DataTypes.STRING,
      allowNull: false
   },
   loginPwd:{
     type:DataTypes.STRING,
     allowNull: false
   },
   avator:{
     type:DataTypes.STRING,
     defaultValue:'https://himg.bdimg.com/sys/portrait/item/wise.1.fb57baf7.XesiFWlM5iQywMOK1frD0Q.jpg?time=1804'
   },
   nickName:{
     type:DataTypes.STRING,
   },
   sex:{
      type:DataTypes.BOOLEAN,
   },
   token:{
      type:DataTypes.STRING
   }
},{
   createdAt:'creatTime',
   updatedAt:'updateTime',
   paranoid:true,
   deletedAt:'deleteTime'
});

module.exports = Admin;
