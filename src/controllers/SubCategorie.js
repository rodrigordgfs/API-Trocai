"use strict";

const SubCategorie = require("../view/SubCategorie");
const Categorie = require("../view/Categorie");
const ValidateBodyFields = require("../validators/ValidateBodyFields").validate;

const fields = [{ name: "Name", value: "name" }];

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

exports.getByCategorie = async (req, res, next) => {
  try {
    const categorie_id = req.params.categorie_id;
    await Categorie.getByID(categorie_id);
    const result = await SubCategorie.getByCategorie(categorie_id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const { categorie_id } = req.params;
    const body = req.body;
    ValidateBodyFields(body, fields);
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
    await SubCategorie.getByID(id);
    await SubCategorie.patch(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    await SubCategorie.getByID(id);
    await SubCategorie.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
