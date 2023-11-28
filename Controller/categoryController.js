const categoryService=require('../Service/categoryService')
const categoryValidation=require('../Controller/Validation/categoryValidation')
module.exports={
    getCategory:async(req,res)=>{
        const category=await categoryService.getCategory()
        res.send(category)
    },
    getCategoryById: async (req,res) => {
      try {
          const category = await categoryService.getCategoryById(req.params.id);
          if (category) {
              res.send(category);
          } else {
              res.status(404).send("category not found");
          }
      } catch (error) {
          console.log(error);
          res.status(500).send("Internal Server Error getProductById");
      }
    },
    createCategory: async (req, res) => {
        try {
          const {error,value} = categoryValidation.createCategory.validate(req.body);
          if (error) {
            res.status(400).send(error.details[0].message);
          } else {
            const category = await categoryService.createCategory(value);
            res.send(category);
          }
        } catch (error) {
          console.log(error);
          res.status(500).send("Internal Server Error");
        }
      },
}