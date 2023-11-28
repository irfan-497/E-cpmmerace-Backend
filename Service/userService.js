const { models } = require("../models");
const bcrypt=require('bcryptjs')
module.exports = {
  getUser: async() => {
    const users=await models.user.findAll()
    return users;
  },
  createUser: async (data) => {
    data.password=bcrypt.hashSync(data.password,10)
    const user = await models.user.create(data);
    return user;
  },
  updateUser: async (userId, updateUserData) => {
    const user = await models.user.findByPk(userId);
    if (user) {
      user.update(updateUserData);
    }
    return user;
  },
  deleteUser: async(userId)=>{
    const user=await models.user.findByPk(userId)
  
    if(user){
      user.destroy()
      return "ss"
    }
    return null
  }
};
