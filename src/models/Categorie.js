"use strict";
const { Model, DataTypes } = require("sequelize");

class Categorie extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                active: DataTypes.BOOLEAN,
            },
            {
                sequelize,
                tableName: "categories",
            }
        );
    }

    static associate(models) {
        this.hasMany(models.SubCategorie, {
            foreignKey: "categorie_id",
            as: "subcategorie",
        });
    }
}

module.exports = Categorie;
