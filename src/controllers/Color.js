"use strict";

const Color = require("../view/Color");
const FieldNotFound = require("../errors/fieldNotFound");
const NotFound = require("../errors/notFound");

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

exports.patch = async (req, res, next) => {
  try {
    const id = req.params.color_id;
    const body = req.body;
    const color = await Color.getByID(id);
    if (!color) {
      throw new NotFound("Color");
    }
    await Color.patch(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const id = req.params.color_id;
    const result = await Color.getByID(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const result = await Color.get();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.color_id;
    const color = await Color.getByID(id);
    if (!color) {
      throw new NotFound("Color");
    }
    await Color.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
