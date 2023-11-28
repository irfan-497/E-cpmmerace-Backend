const userService = require("../Service/userService");
const userValidation = require("../Controller/Validation/userValidation");
module.exports = {
  getUser:async (req, res) => {
    try {
      const user = await userService.getUser();
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  },

  createUser: async (req, res) => {
    try {
      const {error,value} = userValidation.createUser.validate(req.body);
      if (error) {
        res.status(400).send(error.details[0].message);
      } else {
        const user = await userService.createUser(value);
        res.send(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  },
  updateUser:async(req,res)=>{
    try{
      const userId=Number(req.params.id)
      const {error,value}=userValidation.updateUser.validate(req.body)
      if(error){
        res.send((error.details[0].message))
      }else{
        const updateUserData=value
        const user=await userService.updateUser(userId,updateUserData)
        res.send(user)
      }
    }catch (err) {
      res.send("An error occurred while updating the user.");
    }
  },
  deleteUser:async(req,res)=>{
    try{
      const {error,value}=userValidation.deleteUser.validate({
        id:req.params.id,
      })
      if(error){
        res.send(error.details[0].message)
      }else{
        const user=await userService.deleteUser(Number(value.id))
        res.send (user)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
};
