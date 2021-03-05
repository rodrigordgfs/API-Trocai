"use strict";

const SubCategorie = require("../models/SubCategorie");
const AlreadyExists = require("../errors/alreadyExists");

module.exports = {
    async getAlreadyExists(data) {
        const result = await SubCategorie.findOne({
            where: {
                name: data.name
            },
        });
        if (result) {
            throw new AlreadyExists('SubCategoria')
        }
    },

    async getAll() {
        const data = await SubCategorie.findAll({
            attributes: ['id', 'name'],
            include: {
                association: "subcategorieimage",
                attributes: ['sm', 'md', 'lg', 'xl']
            }
        });
        return data
    },

    async post(body) {
        const data = await SubCategorie.create(body);
        return data
    }
}