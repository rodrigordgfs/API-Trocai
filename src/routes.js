const express = require("express");
const routes = express.Router();

const CategorieController = require("./controllers/Categorie");
const SubCategorieController = require("./controllers/SubCategorie");
const SubCategorieImageController = require("./controllers/SubCategorieImage")

routes.post("/api-trocai/categorie", CategorieController.post);
routes.get("/api-trocai/categorie", CategorieController.getAll)
routes.get("/api-trocai/categorie/:categorie_id", CategorieController.getByID)

routes.post("/api-trocai/categorie/:categorie_id/subcategorie", SubCategorieController.post);
routes.get("/api-trocai/subcategorie", SubCategorieController.getAll);

routes.post('/api-trocai/subcategorie/:subcategorie_id/image', SubCategorieImageController.post)

module.exports = routes;
