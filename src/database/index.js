const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

const Categorie = require("../models/Categorie");
const SubCategorie = require("../models/SubCategorie");
const SubCategorieImage = require("../models/SubCategorieImage");

Categorie.init(connection);
SubCategorie.init(connection);
SubCategorieImage.init(connection);

Categorie.associate(connection.models);
SubCategorie.associate(connection.models);
SubCategorieImage.associate(connection.models);

module.exports = connection;
