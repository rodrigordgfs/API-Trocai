const ProductImage = require("../models/ProductImage");
const { post } = require("./Product");

module.exports = {
  async post(body) {
    console.log(body);
    return await ProductImage.create(body);
  },
};
