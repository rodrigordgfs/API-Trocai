"use strict";
const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        price: DataTypes.DECIMAL(8, 2),
        delivery: DataTypes.ENUM("Em Mãos", "Envio"),
      },
      {
        sequelize,
        tableName: "products",
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Color, {
      foreignKey: "product_id",
      as: "color",
    });
    this.belongsTo(models.SubCategorie, {
      foreignKey: "subcategorie_id",
      as: "subcategories",
    });
  }
}

module.exports = Product;
