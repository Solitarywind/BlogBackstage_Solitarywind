const connect = require('./Connect');
const { DataTypes } = require('sequelize');

const Note = connect.define('Note',{
    noteName:{
      type:DataTypes.STRING,
      allowNull:true
    },
    noteLabel:{
      type:DataTypes.STRING,
      allowNull: true
    },
   noteCode:{
      type:DataTypes.STRING,
      allowNull: true
   },
    coverPic:{
      type:DataTypes.STRING,
      allowNull:true
    },
    noteCont:{
        type:DataTypes.TEXT,
        allowNull:true
    }
});

module.exports = Note
