const joi=require('joi')
module.exports={
    addToCart:joi.object().keys({
        userID: joi.number().required(),
        productID:joi.number().required()
    }),
    removeFromCart: joi.object().keys({
        userID: joi.number().required(),
        productID:joi.number().required()
      })
}