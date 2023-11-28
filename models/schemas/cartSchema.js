const {DataTypes}=require('sequelize')
const sequelize=require('../../Common/dbconnection')
const Cart = sequelize.define('cart', {
  id:{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
},
userID:{
  type:DataTypes.INTEGER,
  allowNull:false

}

  });

  module.exports=Cart