"use strict";

const model = require("../models/categorie");

module.exports = {
    async post(data) {
        return model.create(data);
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
