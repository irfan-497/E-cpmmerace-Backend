var express = require('express');
var router = express.Router();
const {getUser}=require('../Controller/userController')
const userController=require('../Controller/userController')
const authController=require('../Common/authController')
// router.get("/getUser",userController.getUser),
router.get("/getUser",authController.verifyToken,getUser)
router.post('/login',authController.login)
router.post('/createUser',userController.createUser)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)
module.exports = router;
