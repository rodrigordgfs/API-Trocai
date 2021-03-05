'use strict'

const SubCategorieImage = require('../models/SubCategorieImage')
const AlreadyExists = require("../errors/alreadyExists");

module.exports = {
    async getAlreadyExists(data) {
        console.log(data);
        const result = await SubCategorieImage.findOne({
            where: {
                subcategorie_id: data
            },
        });
        if (result) {
            throw new AlreadyExists('SubCategoria Image')
        }
    },

    async post(body) {
        const result = await SubCategorieImage.create(body)
        return result
    }
}