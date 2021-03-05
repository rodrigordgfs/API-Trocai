'use strict'

const SubCategorieImage = require("../view/SubCategorieImage")
const SubCategorie = require("../view/SubCategorie")
const FieldNotFound = require('../errors/fieldNotFound')
const NotFound = require("../errors/notFound");

function validateFields(data) {
    const fields = [
        { name: 'SM', value: 'sm' },
        { name: 'MD', value: 'md' },
        { name: 'LG', value: 'lg' },
        { name: 'XL', value: 'xl' }
    ]
    fields.forEach((field) => {
        const value = field.value
        if (!data[value]) {
            throw new FieldNotFound(field.name)
        }
    })
}

exports.getBySubcategorie = async (req, res, next) => {
    try {
        const id = req.params.subcategorie_id
        const subcategorie = await SubCategorie.getByID(id)
        if (!subcategorie) {
            throw new NotFound("SubCategorie")
        }
        const subcategorieimage = await SubCategorieImage.getBySubcategorie(id)
        if (!subcategorieimage) {
            throw new NotFound("SubCategorieImage")
        }
        res.status(200).send(subcategorieimage)
    } catch (error) {
        next(error)
    }
}

exports.post = async (req, res, next) => {
    try {
        const { subcategorie_id } = req.params
        const body = req.body
        validateFields(body)
        const data = Object.assign({}, body, { subcategorie_id })
        await SubCategorieImage.getAlreadyExists(data.subcategorie_id)
        const result = await SubCategorieImage.post(data)
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.subcategorie_id
        const subcategorie = await SubCategorie.getByID(id)
        if (!subcategorie) {
            throw new NotFound('SubCategorie')
        }
        await SubCategorieImage.delete(id)
        res.status(200).end()
    } catch (error) {
        next(error)
    }
}