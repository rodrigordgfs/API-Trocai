"use strict";
const { Model, DataTypes } = require("sequelize");

class ProductImage extends Model {
  static init(sequelize) {
    super.init(
      {
        url: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "productimages",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    });
  }
}

module.exports = ProductImage;
