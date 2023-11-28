const { models } = require("../models");

module.exports = {
  getCarts: async (userID) => {
    const cart = await models.cart.findOne(
      {where:  userID ,
      include: [{ model: models.product, through: "product_cart" }]
    });
    return cart
  },

  addToCart: async (userID, productID) => {
    try {
      let userCart = await models.cart.findOne({
        where: { userID },
      });

      if (!userCart) {
        userCart = await models.cart.create({ userID });
      }

      const product = await models.product.findByPk(productID);

      if (!product) {
        return { error: "Product not found" };
      }

      await userCart.addProduct(product);

      return;
    } catch (error) {
      console.log(error);
      return { error: "Internal Server Error" };
    }
  },

  removeFromCart: async (userID, productID) => {
    try {
      let = userCart = await models.cart.findOne({
        where: { userID },
      });
      if (userCart) {
        userCart = await models.product_cart.destroy({
          where: { productID },
        });
      }
      return;
    } catch (error) {
      console.log(error);
    }
  },
};
