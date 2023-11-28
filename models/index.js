const sequelize=require('../Common/dbconnection')
const user=require('../models/schemas/userSchema')
const product=require('../models/schemas/productSchema')
const category=require('../models/schemas/categorySchema')
const cart=require('../models/schemas/cartSchema')
const Token=require('../models/schemas/Token')
category.hasMany(product,{
    onDelete: "CASCADE",
    foreignKey:{
        name:"categoryID",
        allowNull: false,
    }
}),
product.belongsTo(category,{
    onDelete: "CASCADE",
    foreignKey:{
        name:"categoryID",
        allowNull: false,
    }
}),
user.hasOne(cart,{
    onDelete: "CASCADE",
    foreignKey:{
        name:"userID",
        allowNull: false,
    }
}),
cart.belongsTo(user,{
    onDelete: "CASCADE",
    foreignKey:{
        name:"userID",
        allowNull: false,
    }
}),
product.belongsToMany(cart, {
    through: "product_cart",
    foreignKey: "productID",
    allowNull: false,
  });
  cart.belongsToMany(product, {
    through: "product_cart",
    foreignKey: "userID",
    allowNull: false,
  });
const models=sequelize.models


module.exports={sequelize,models}