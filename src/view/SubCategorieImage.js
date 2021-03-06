"use strict";

const SubCategorieImage = require("../models/SubCategorieImage");
const AlreadyExists = require("../errors/alreadyExists");

module.exports = {
  async getAlreadyExists(data) {
    const result = await SubCategorieImage.findOne({
      where: {
        subcategorie_id: data,
      },
    });
    if (result) {
      throw new AlreadyExists("SubCategorie Image");
    }
  },

  async getBySubcategorie(id) {
    const result = await SubCategorieImage.findOne({
      where: { subcategorie_id: id },
      attributes: ["sm", "md", "lg", "xl"],
    });
    return result;
  },

  async post(body) {
    const result = await SubCategorieImage.create(body);
    return result;
  },

  async patch(id, body) {
    return await SubCategorieImage.update(body, {
      where: { subcategorie_id: id },
    });
  },

  async delete(id) {
    const result = await SubCategorieImage.destroy({
      where: { subcategorie_id: id },
    });
    return result;
  },
};
