"use strict";

const Categorie = require("../view/Categorie");
const ValidateBodyFields = require("../validators/ValidateBodyFields").validate;

const fields = [{ name: "Name", value: "name" }];

exports.getAll = async (req, res, next) => {
  try {
    const result = await Categorie.getAll();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const id = req.params.categorie_id;
    const result = await Categorie.getByID(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const body = req.body;
    ValidateBodyFields(body, fields);
    await Categorie.getAlreadyExists({ name: body.name });
    const result = await Categorie.post(body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const id = req.params.categorie_id;
    const body = req.body;
    await Categorie.getByID(id);
    await Categorie.patch(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.categorie_id;
    await Categorie.getByID(id);
    await Categorie.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
