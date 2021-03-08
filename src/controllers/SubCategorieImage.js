"use strict";

const SubCategorieImage = require("../view/SubCategorieImage");
const SubCategorie = require("../view/SubCategorie");
const ValidateBodyFields = require("../validators/ValidateBodyFields").validate;

const fields = [
  { name: "SM", value: "sm" },
  { name: "MD", value: "md" },
  { name: "LG", value: "lg" },
  { name: "XL", value: "xl" },
];

exports.getBySubcategorie = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    await SubCategorie.getByID(id);
    const subcategorieimage = await SubCategorieImage.getBySubcategorie(id);
    res.status(200).send(subcategorieimage);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const { subcategorie_id } = req.params;
    const body = req.body;
    ValidateBodyFields(body, fields);
    const data = Object.assign({}, body, { subcategorie_id });
    await SubCategorieImage.getAlreadyExists(data.subcategorie_id);
    const result = await SubCategorieImage.post(data);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    const body = req.body;
    ValidateBodyFields(body, fields);
    await SubCategorie.getByID(id);
    await SubCategorieImage.patch(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.subcategorie_id;
    await SubCategorie.getByID(id);
    await SubCategorieImage.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
