const {models}=require('../models')
module.exports={
    getProduct:async()=>{
        const product=await models.product.findAll()
        return product
    },
    getProductById: async (productID) => {
        const product = await models.product.findByPk(productID);
        return product;
    },
    createProduct:async(data)=>{
        const product=await models.product.create(data)
        return product
    },
    updateProduct:async(productID,updateProductData)=>{
        const product=await models.product.findByPk(productID)
        if(product)
       { 
        product.update(updateProductData)
    }
    
    return product
    }, deleteProduct: async(productID)=>{
        const product=await models.product.findByPk(productID)
      
        if(product){
          product.destroy()
          return "ss"
        }
        return null
      },
      populateProductData: async (data) => {
        try {
            const product = await models.product.bulkCreate(data);
            return product;
        } catch (error) {
            console.log(error);
            throw new Error("Error in populating product data");
        }
    }
};