"use strict";

const Product = require("../view/Product");
const Color = require("../view/Color");
const SubCategorie = require("../view/SubCategorie");
const NotFound = require("../errors/notFound");
const FieldNotFound = require("../errors/fieldNotFound");

function validateFields(data) {
  const fields = [
    { name: "Name", value: "name" },
    { name: "Description", value: "description" },
    { name: "ColorID", value: "color_id" },
    { name: "SubCategorieID", value: "subcategorie_id" },
    { name: "Price", value: "price" },
    { name: "Delivery", value: "delivery" },
  ];
  fields.forEach((field) => {
    const value = field.value;
    if (!data[value]) {
      throw new FieldNotFound(field.name);
    }
  });
}

exports.post = async (req, res, next) => {
  try {
    const body = req.body;
    validateFields(body);
    const color = await Color.getByID(body.color_id);
    if (!color) {
      throw new NotFound("Color");
    }
    const subcategorie = await SubCategorie.getByID(body.subcategorie_id);
    if (!subcategorie) {
      throw new NotFound("SubCategorie");
    }
    const result = await Product.post(body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};
