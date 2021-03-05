"use strict";

const { get } = require("config");
const model = require("../models/Categorie");

module.exports = {
    async get() {
        const data = await model.findAll({
            attributes: ['id', 'name'],
            include: {
                association: "subcategorie",
                attributes: ["id", "name"]
            },
        });
        return data;
    },

    async post(data) {
        return model.create(data);
    },

    async getAlreadyExists(name) {
        const data = await model.findOne({
            where: {
                name: name,
            },
        });
        return data;
    },
};
