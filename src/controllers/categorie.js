"use strict";
const Categorie = require("../serializers/categorie");
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

exports.post = async (req, res, next) => {
    try {
        const body = req.body;
        validateFields(body)
        const categorie = new Categorie(body);
        await categorie.getAlreadyExists()
        await categorie.post();
        res.status(201).send(categorie);
    } catch (error) {
        next(error)
    }
};
