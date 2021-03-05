"use strict";

const Categorie = require('../view/Categorie')
const FieldNotFound = require('../errors/fieldNotFound')
const NotFound = require('../errors/notFound')

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
        const result = await Categorie.getAll()
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

exports.getByID = async (req, res, next) => {
    try {
        const id = req.params.categorie_id
        const result = await Categorie.getByID(id)
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

exports.post = async (req, res, next) => {
    try {
        const body = req.body
        validateFields(body)
        await Categorie.getAlreadyExists({ name: body.name })
        const result = await Categorie.post(body)
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.categorie_id
        const categorie = await Categorie.getByID(id)
        if (!categorie) {
            throw new NotFound("Categorie")
        }
        await Categorie.delete(id)
        res.status(200).end()
    } catch (error) {
        next(error)
    }
}