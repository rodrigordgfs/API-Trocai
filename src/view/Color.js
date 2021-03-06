"use strict";

const Color = require("../models/Color");
const AlreadyExists = require("../errors/alreadyExists");

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

  async post(body) {
    return await Color.create(body);
  },
};
