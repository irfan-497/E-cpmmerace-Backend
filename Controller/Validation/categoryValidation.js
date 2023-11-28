const joi=require('joi')
module.exports={
    createCategory:joi.object().keys({
        categoryType:joi.string().required(),
        categoryID:joi.number().required()
    })
}