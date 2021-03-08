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
    this.belongsTo(models.Color, {
      foreignKey: "color_id",
      as: "color",
    });
    this.hasOne(models.ProductImage, {
      foreignKey: "cover_id",
      as: "cover",
    });
    this.hasMany(models.ProductImage, {
      foreignKey: "product_id",
      as: "productimage",
    });
    this.belongsTo(models.SubCategorie, {
      foreignKey: "subcategorie_id",
      as: "subcategories",
    });
  }
}

module.exports = Product;
