"use strict";

const Color = require("../view/Color");
const ValidateBodyFields = require("../validators/ValidateBodyFields").validate;

const fields = [
  { name: "Name", value: "name" },
  { name: "Hex", value: "hex" },
];

exports.post = async (req, res, next) => {
  try {
    const body = req.body;
    ValidateBodyFields(body, fields);
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
    await Color.getByID(id);
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
    await Color.getByID(id);
    await Color.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
