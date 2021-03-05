"use strict";

const SubCategorie = require('../view/SubCategorie')
const SubCategorieRepositorie = require('../repositories/SubCategorie')
const FieldNotFound = require('../errors/fieldNotFound')

function validateFields(data) {
    const fields = [{ name: 'Name', value: 'name' }]
    fields.forEach((field) => {
        const value = field.value
        if (!data[value]) {
            throw new FieldNotFound(field.name)
        }
    })
}

exports.getAll = async (req, res, next) => {
    try {
        const data = await SubCategorieRepositorie.getAll()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

exports.post = async (req, res, next) => {
    try {
        const { categorie_id } = req.params
        const body = req.body
        validateFields(body)
        const data = Object.assign({}, body, { categorie_id })
        console.log(data);
        const subcategorie = new SubCategorie(data)
        await subcategorie.getAlreadyExists()
        await subcategorie.post()
        res.status(201).send(subcategorie)
    } catch (error) {
        next(error)
    }
}