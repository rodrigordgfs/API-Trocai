"use strict";
const Categorie = require("../models/Categorie");
const AlreadyExists = require("../errors/alreadyExists");

module.exports = {
    async getAll() {
        const data = await Categorie.findAll({
            attributes: ["id", "name"],
            include: {
                association: "subcategorie",
                attributes: ["id", "name"],
            },
        });
        return data;
    },

    async getByID(id) {
        const result = await Categorie.findByPk(id, {
            attributes: ["id", "name", 'active'],
            include: {
                association: "subcategorie",
                attributes: ["id", "name"],
            }
        });
        if (!result) {
            throw new NotFound("Categorie");
        } else if (!result.active) {
            throw new Deactivated("Categorie");
        }
        return result
    },

    async getAlreadyExists(data) {
        const result = await Categorie.findOne({
            where: {
                name: data.name
            },
        });
        if (result) {
            throw new AlreadyExists("Categoria");
        }
    },

    async post(body) {
        const result = await Categorie.create(body);
        return result
    },
};
