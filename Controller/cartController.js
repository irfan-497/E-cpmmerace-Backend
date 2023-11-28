const cartService = require('../Service/cartService');
const cartValidation = require('../Controller/Validation/cartValidation');

module.exports = {
  getCarts: async (req, res) => {
    const cart = await cartService.getCarts(req.body);
    res.send(cart);
  },
  addToCart: async (req, res) => {
    try {
      const { error, value } = cartValidation.addToCart.validate({
        productID: req.params.productID,
        ...req.body,
      });

      if (error) {
        res.status(400).json({ error: error.details[0].message });
      } else {
        const productID = Number(req.params.productID); // Correct parameter name
        const { userID } = value;
        await cartService.addToCart(productID, userID);
        res.status(200).json({
          message: "Product added to cart successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  removeFromCart: async (req, res) => {
    try {
      const { error, value } = cartValidation.removeFromCart.validate({
        productID: req.params.productID,
        ...req.body,
      });

      if (error) {
        res.status(400).json({ error: error.details[0].message });
      } else {
        const productID = Number(req.params.productID); 
        const { userID } = value;
        await cartService.removeFromCart(productID, userID);
        res.status(200).json({
          message: "Product remove to cart successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

