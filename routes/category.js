const express = require("express");
const router = express.Router();
const categoryController = require("../Controller/categoryController");
router.get("/getCategory",categoryController.getCategory);
router.get("/getCategory/:id",categoryController.getCategoryById);
router.post("/createCategory",categoryController.createCategory);
module.exports = router;
