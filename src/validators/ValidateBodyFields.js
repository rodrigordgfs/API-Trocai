const FieldNotFound = require("../errors/fieldNotFound");

exports.validate = (body, fields) => {
  let bodyFields = {};
  fields.forEach((field) => {
    const value = field.value;
    if (!body[value]) {
      throw new FieldNotFound(field.name);
    }
  });
};
