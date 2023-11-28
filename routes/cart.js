const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController');
router.get('/getCarts', cartController.getCarts);
router.post('/addToCart/:productID', cartController.addToCart);
router.delete('/cartFromRemove/:productID', cartController.removeFromCart);
module.exports = router;
