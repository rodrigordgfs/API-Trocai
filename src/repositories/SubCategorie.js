"use strict";

const model = require("../models/SubCategorie");

module.exports = {
    async post(data) {
        return model.create(data);
    },

    async getAll() {
        const data = await model.findAll({
            attributes: ['id', 'name']
        });
        return data;
    },

    async getAlreadyExists(name) {
        const data = await model.findOne({
            where: {
                name: name,
            },
        });
        return data
    },
};
