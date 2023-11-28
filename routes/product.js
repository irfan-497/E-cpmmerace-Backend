const express=require('express')
const router=express.Router()
const productController=require('../Controller/productController');
router.get('/getProduct',productController.getProduct)
router.get('/getProductById/:id', productController.getProductById);
router.post('/createProduct',productController.createProduct)
router.put('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)
router.post('/bulkCreate',productController.populateProductData);
module.exports = router;