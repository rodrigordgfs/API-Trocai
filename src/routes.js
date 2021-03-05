const express = require("express");
const routes = express.Router();

const CategorieController = require("./controllers/Categorie");
const SubCategorieController = require("./controllers/SubCategorie");

routes.post("/api-trocai/categorie", CategorieController.post);
routes.get("/api-trocai/categorie", CategorieController.getAll)

routes.post("/api-trocai/categorie/:categorie_id/subcategorie", SubCategorieController.post);
routes.get("/api-trocai/subcategorie", SubCategorieController.getAll);

module.exports = routes;
