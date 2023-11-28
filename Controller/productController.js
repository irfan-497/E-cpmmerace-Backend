const productService=require('../Service/productService')
const productValidation=require('../Controller/Validation/productValidation')
const productData = require('../productData.json');
module.exports={
    getProduct:async(req,res)=>{
        try{
            const product=await productService.getProduct()
            res.send(product)
        }
        catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error getproduct");
    }
},
getProductById: async (req, res) => {
  try {
      const product = await productService.getProductById(req.params.id);
      if (product) {
          res.send(product);
      } else {
          res.status(404).send("Product not found");
      }
  } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error getProductById");
  }
},
createProduct:async(req,res)=>{
    try{
        const {error,value}=productValidation.createProduct.validate(req.body)
        if(error)
        {
            res.send(error.details[0].message)
        }
        else{
            const product=await productService.createProduct(value)
            res.send(product)
        }
        
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
},
updateProduct:async(req,res)=>{
    try{
        const productID=Number(req.params.id)
        const {error,value}=productValidation.updateProduct.validate(req.body)
        if(error){
            res.send(error.details[0].message)
        }
        else{
            const updateProductData = value;
        const product=await productService.updateProduct(productID,updateProductData)
        res.send(product)
        }
    }catch (err) {
        res.send(err);
      }
},
deleteProduct:async(req,res)=>{
    try{
      const {error,value}=productValidation.deleteProduct.validate({
        id:req.params.id,
      })
      if(error){
        res.send(error.details[0].message)
      }else{
        const product=await productService.deleteProduct(Number(value.id))
        res.send (product)
      }
    }
    catch (error) {
      console.log(error);
    }
  },
  populateProductData: async (req, res) => {

    try {
        const product = await productService.populateProductData(productData);
        res.send(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
},
}