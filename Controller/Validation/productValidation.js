const joi=require('joi')
module.exports={
    createProduct:joi.object().keys({
        title:joi.string().required(),
        price:joi.number().required(),
        rating:joi.number().required(),
        description:joi.string().required(),
        image:joi.string().required,
        rating:joi.number().required(),
        categoryID:joi.string().required()
    }),
   updateProduct:joi.object().keys({
    id: joi.number().required(),
    title:joi.string().required(),
    price:joi.number().required(),
    rating:joi.number().required(),
    description:joi.string().required(),
    image:joi.string().required,
    rating:joi.number().required(),
    categoryID:joi.string().required()
    }),
    deleteProduct:joi.object().keys({
        id: joi.number().required(),})
}