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
}

module.exports = Color;
