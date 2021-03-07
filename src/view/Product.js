"use strict";

const Product = require("../models/Product");

module.exports = {
  async post(body) {
    console.log(body);
    return await Product.create(body);
  },
};
