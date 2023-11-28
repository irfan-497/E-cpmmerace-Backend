const {models}=require('../models');
module.exports = {
    getCategory: async() => {
        const category=await models.category.findAll()
        return category;
    },
    getCategoryById:async(categoryID)=>{
        const category=await models.category.findByPk(categoryID)
        return category 
    },
    createCategory: async(data) => {
        const category=await models.category.create(data)
        return category;
    }
};