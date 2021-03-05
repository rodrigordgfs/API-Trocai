"use strict";

const SubCategorie = require('../view/SubCategorie')
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
        const result = await SubCategorie.getAll()
        res.status(200).send(result)
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
        await SubCategorie.getAlreadyExists({ name: data.name })
        const result = await SubCategorie.post(data)
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}