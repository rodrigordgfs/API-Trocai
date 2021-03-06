"use strict";

const SubCategorie = require("../view/SubCategorie");
const FieldNotFound = require("../errors/fieldNotFound");
const NotFound = require("../errors/notFound");

function validateFields(data) {
  const fields = [{ name: "Name", value: "name" }];
  fields.forEach((field) => {
    const value = field.value;
    if (!data[value]) {
      throw new FieldNotFound(field.name);
    }
  });
}

exports.getByID = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    const result = await SubCategorie.getByID(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const result = await SubCategorie.getAll();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const { categorie_id } = req.params;
    const body = req.body;
    validateFields(body);
    const data = Object.assign({}, body, { categorie_id });
    await SubCategorie.getAlreadyExists({ name: data.name });
    const result = await SubCategorie.post(data);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    const body = req.body;
    const subcategorie = await SubCategorie.getByID(id);
    if (!subcategorie) {
      throw new NotFound("SubCategorie");
    }
    await SubCategorie.patch(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    const subcategorie = await SubCategorie.getByID(id);
    if (!subcategorie) {
      throw new NotFound("SubCategorie");
    }
    await SubCategorie.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
