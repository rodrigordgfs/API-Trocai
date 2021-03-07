"use strict";
const { Model, DataTypes } = require("sequelize");

class Color extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        hex: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "colors",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Product, {
      foreignKey: "color_id",
      as: "products",
    });
  }
}

module.exports = Color;
