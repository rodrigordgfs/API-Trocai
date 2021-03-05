const express = require("express");
const routes = express.Router();

const CategorieController = require("./controllers/Categorie");
const SubCategorieController = require("./controllers/SubCategorie");
const SubCategorieImageController = require("./controllers/SubCategorieImage")

// CATEGORIES
routes.post("/api-trocai/categorie", CategorieController.post);
routes.get("/api-trocai/categorie", CategorieController.getAll)
routes.get("/api-trocai/categorie/:categorie_id", CategorieController.getByID)
routes.delete("/api-trocai/categorie/:categorie_id", CategorieController.delete)

// SUBCATEGORIES
routes.post("/api-trocai/categorie/:categorie_id/subcategorie", SubCategorieController.post);
routes.get("/api-trocai/subcategorie", SubCategorieController.getAll);
routes.get("/api-trocai/subcategorie/:subcategorie_id", SubCategorieController.getByID)
routes.delete('/api-trocai/subcategorie/:subcategorie_id', SubCategorieController.delete)

// SUBCATEGORIES IMAGES
routes.post('/api-trocai/subcategorie/:subcategorie_id/image', SubCategorieImageController.post)
routes.get('/api-trocai/subcategorie/:subcategorie_id/image', SubCategorieImageController.getBySubcategorie)
routes.delete('/api-trocai/subcategorie/:subcategorie_id/image', SubCategorieImageController.delete)

module.exports = routes;
