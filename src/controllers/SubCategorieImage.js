'use strict'

const SubCategorieImage = require("../view/SubCategorieImage")

exports.post = async (req, res, next) => {
    try {
        const { subcategorie_id } = req.params
        const body = req.body
        const data = Object.assign({}, body, { subcategorie_id })
        await SubCategorieImage.getAlreadyExists(data.subcategorie_id)
        const result = await SubCategorieImage.post(data)
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}