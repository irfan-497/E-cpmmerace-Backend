const {DataTypes}=require('sequelize')
const sequelize=require('../../Common/dbconnection')
const Token= sequelize.define('Token',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    Token:{
        type:DataTypes.STRING,
        allowNull:false,
    }

},
{    
    timestamps:true,
    paranoid:true
})

module.exports=Token