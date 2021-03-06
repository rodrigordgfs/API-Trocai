"use strict";
const { Model, DataTypes } = require("sequelize");

class SubCategorieImage extends Model {
  static init(sequelize) {
    super.init(
      {
        sm: DataTypes.STRING,
        md: DataTypes.STRING,
        lg: DataTypes.STRING,
        xl: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "subcategorieimages",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Categorie, {
      foreignKey: "subcategorie_id",
      as: "subcategorie",
    });
  }
}

module.exports = SubCategorieImage;
