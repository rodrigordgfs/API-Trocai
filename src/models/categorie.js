"use strict";

const Sequelize = require("sequelize");
const instance = require("../database/connection");

const columns = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
};

const options = {
    freezeTableName: true,
    tableName: "categorie",
    timestamp: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    version: "version",
};

module.exports = instance.define("categorie", columns, options);
