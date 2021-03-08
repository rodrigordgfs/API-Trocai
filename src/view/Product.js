"use strict";

const Product = require("../models/Product");
const NotFount = require("../errors/notFound");

module.exports = {
  async post(body) {
    return await Product.create(body);
  },

  async getByID(id) {
    const result = Product.findByPk(id, {
      attributes: ["id", "name", "description", "active", "price", "delivery"],
      include: [
        {
          association: "color",
          attributes: ["id", "name", "hex"],
        },
        {
          association: "subcategories",
          attributes: ["id", "name", "active"],
        },
        {
          association: "productimage",
          attributes: ["id", "url"],
        },
      ],
    });
    if (!result) {
      throw new NotFount("Product");
    }
    return result;
  },
};
