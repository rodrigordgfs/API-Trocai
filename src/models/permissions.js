const Sequelize = require("sequelize");
const instance = require("../database/connection");

const columns = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNUll: false,
        primaryKey: true,
    },
    user: {
        type: Sequelize.STRING,
        allowNUll: false,
    },
    read: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    write: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    update: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
};

const options = {
    freezeTableName: true,
    tableName: "permissions",
    timestamp: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    version: "version",
};

module.exports = instance.define("permissions", columns, options);
