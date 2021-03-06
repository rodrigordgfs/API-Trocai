"use strict";

const Color = require("../models/Color");
const AlreadyExists = require("../errors/alreadyExists");
const NotFound = require("../errors/notFound");

module.exports = {
  async getAlreadyExists(data) {
    const result = await Color.findOne({
      where: {
        hex: data.hex,
      },
    });
    if (result) {
      throw new AlreadyExists("Color");
    }
  },

  async get() {
    const result = await Color.findAll({
      order: [["name", "ASC"]],
      attributes: ["id", "name", "hex", "active"],
    });
    return result;
  },

  async getByID(id) {
    const result = await Color.findByPk(id, {
      attributes: ["id", "name", "hex", "active"],
    });
    if (!result) {
      throw new NotFound("Color");
    }
    return result;
  },

  async post(body) {
    return await Color.create(body);
  },

  async patch(id, body) {
    return await Color.update(body, { where: { id: id } });
  },

  async delete(id) {
    return await Color.destroy({
      where: { id: id },
    });
  },
};
