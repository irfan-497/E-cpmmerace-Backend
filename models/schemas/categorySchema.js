const {DataTypes}=require('sequelize')
const sequelize=require('../../Common/dbconnection')
const category=sequelize.define('category',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    categoryType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    categoryID:{
        type:DataTypes.INTEGER,
        allowNull: false,
    
    }
},
{
        
    timestamps:true,
    paranoid:true
})

module.exports=category