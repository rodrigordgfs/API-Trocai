"use strict";
const { Model, DataTypes } = require("sequelize");

class SubCategorie extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                active: DataTypes.BOOLEAN,
            },
            {
                sequelize,
                tableName: "subcategories",
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Categorie, {
            foreignKey: "categorie_id",
            as: "categorie",
        });
        this.hasOne(models.SubCategorieImage, {
            foreignKey: "subcategorie_id",
            as: "subcategorieimage",
        });
    }
}

module.exports = SubCategorie;
