"use strict";

const SubCategorie = require("../models/SubCategorie");
const AlreadyExists = require("../errors/alreadyExists");
const NotFound = require("../errors/notFound");

module.exports = {
  async getAlreadyExists(data) {
    const result = await SubCategorie.findOne({
      where: {
        name: data.name,
      },
    });
    if (result) {
      throw new AlreadyExists("SubCategoria");
    }
  },

  async getByID(id) {
    const result = await SubCategorie.findByPk(id, {
      attributes: ["id", "name", "active"],
      include: {
        association: "subcategorieimage",
        attributes: ["sm", "md", "lg", "xl"],
      },
    });
    if (!result) {
      throw new NotFound("SubCategorie");
      // } else if (!result.active) {
      //     throw new Deactivated("SubCategorie");
    }
    return result;
  },

  async getByCategorie(id) {
    const result = await SubCategorie.findAll({
      where: { categorie_id: id },
    });
    return result;
  },

  async getAll() {
    const result = await SubCategorie.findAll({
      attributes: ["id", "name", "active"],
      include: {
        association: "subcategorieimage",
        attributes: ["sm", "md", "lg", "xl"],
      },
    });
    return result;
  },

  async post(body) {
    return await SubCategorie.create(body);
  },

  async patch(id, body) {
    return await SubCategorie.update(body, {
      where: { id: id },
    });
  },

  async delete(id) {
    return await SubCategorie.destroy({
      where: { id: id },
    });
  },
};
