"use strict";
const Categorie = require("../models/Categorie");
const AlreadyExists = require("../errors/alreadyExists");
const NotFound = require("../errors/notFound");
const Deactivated = require("../errors/deactivated");

module.exports = {
  async getAll() {
    const data = await Categorie.findAll(
      {
        attributes: ["id", "name", "active"],
        include: {
          association: "subcategorie",
          attributes: ["id", "name", "active"],
          include: {
            association: "subcategorieimage",
            attributes: ["sm", "md", "lg", "xl"],
          },
        },
      },
      { where: { active: true } }
    );
    return data;
  },

  async getByID(id) {
    const result = await Categorie.findByPk(id, {
      attributes: ["id", "name", "active"],
      include: {
        association: "subcategorie",
        attributes: ["id", "name", "active"],
        include: {
          association: "subcategorieimage",
          attributes: ["sm", "md", "lg", "xl"],
        },
      },
    });
    if (!result) {
      throw new NotFound("Categorie");
      // } else if (!result.active) {
      //   throw new Deactivated("Categorie");
    }
    return result;
  },

  async getAlreadyExists(data) {
    const result = await Categorie.findOne({
      where: {
        name: data.name,
      },
    });
    if (result) {
      throw new AlreadyExists("Categoria");
    }
  },

  async post(body) {
    return await Categorie.create(body);
  },

  async patch(id, body) {
    return await Categorie.update(body, {
      where: { id: id },
    });
  },

  async delete(id) {
    return await Categorie.destroy({
      where: { id: id },
    });
  },
};
