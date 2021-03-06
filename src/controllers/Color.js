"use strict";

const Color = require("../view/Color");
const FieldNotFound = require("../errors/fieldNotFound");

function validateFields(data) {
  const fields = [
    { name: "Name", value: "name" },
    { name: "Hex", value: "hex" },
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
    await Color.getAlreadyExists({ hex: body.hex });
    const result = await Color.post(body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};
