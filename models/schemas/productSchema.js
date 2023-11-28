const {DataTypes}=require('sequelize')
const sequelize=require('../../Common/dbconnection')
const product= sequelize.define('product',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false,
    },
   
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    image:{
type:DataTypes.STRING,
    },
    rating:{
    type:DataTypes.JSON,
    rate:{
        type:DataTypes.FLOAT
    },
    count:{
        type:DataTypes.INTEGER
    }
},
    // categoryID: { 
    //     type: DataTypes.INTEGER, 
    //     allowNull: false,
    // }
},
{     
    timestamps:true,
    paranoid:true
})
module.exports=product