const express = require("express");
const routes = express.Router();

const CategorieController = require("./controllers/Categorie");
const SubCategorieController = require("./controllers/SubCategorie");
const SubCategorieImageController = require("./controllers/SubCategorieImage");
const ColorController = require("./controllers/Color");
const ProductController = require("./controllers/Product");
const ProductImageController = require("./controllers/ProductImage");

// CATEGORIES
routes.post("/api-trocai/categorie", CategorieController.post);
routes.patch("/api-trocai/categorie/:categorie_id", CategorieController.patch);
routes.get("/api-trocai/categorie", CategorieController.getAll);
routes.get("/api-trocai/categorie/:categorie_id", CategorieController.getByID);
routes.delete(
  "/api-trocai/categorie/:categorie_id",
  CategorieController.delete
);

// SUBCATEGORIES
routes.post(
  "/api-trocai/categorie/:categorie_id/subcategorie",
  SubCategorieController.post
);
routes.patch(
  "/api-trocai/subcategorie/:subcategorie_id",
  SubCategorieController.patch
);
routes.get(
  "/api-trocai/categorie/:categorie_id/subcategorie",
  SubCategorieController.getByCategorie
);
routes.get("/api-trocai/subcategorie", SubCategorieController.getAll);
routes.get(
  "/api-trocai/subcategorie/:subcategorie_id",
  SubCategorieController.getByID
);
routes.delete(
  "/api-trocai/subcategorie/:subcategorie_id",
  SubCategorieController.delete
);

// SUBCATEGORIES IMAGES
routes.post(
  "/api-trocai/subcategorie/:subcategorie_id/image",
  SubCategorieImageController.post
);
routes.get(
  "/api-trocai/subcategorie/:subcategorie_id/image",
  SubCategorieImageController.getBySubcategorie
);
routes.delete(
  "/api-trocai/subcategorie/:subcategorie_id/image",
  SubCategorieImageController.delete
);
routes.patch(
  "/api-trocai/subcategorie/:subcategorie_id/image",
  SubCategorieImageController.patch
);

// COLORS
routes.post("/api-trocai/color", ColorController.post);
routes.get("/api-trocai/color", ColorController.get);
routes.get("/api-trocai/color/:color_id", ColorController.getByID);
routes.patch("/api-trocai/color/:color_id", ColorController.patch);
routes.delete("/api-trocai/color/:color_id", ColorController.delete);

// PRODUCTS
routes.post("/api-trocai/product", ProductController.post);
routes.get("/api-trocai/product/:product_id", ProductController.getByID);

// PRODUCT IMAGES
routes.post(
  "/api-trocai/product/:product_id/image",
  ProductImageController.post
);

module.exports = routes;
