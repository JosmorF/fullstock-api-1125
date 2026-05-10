import { Router } from "express";
import * as categoryController from "./controllers/category.controller.ts";
import * as productController from "./controllers/product.controller.ts";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "full stock API" });
});

router.get("/categories", categoryController.getCategories);
router.get("/categories/:slug", categoryController.getCategory);

// Obtener Productos de una categoria
router.get(
  "/categories/:slug/products",
  productController.getProductsByCategory,
);

// Obtener detalle de un producto.
router.get("/products/:slug", productController.getProductBySlug);

export default router;
