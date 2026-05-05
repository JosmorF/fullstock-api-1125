import { Router } from "express";
import * as categoryController from "./controllers/category.controller.ts";

const router = Router();

// interface ProductRow {
//   // esto es lo que viene de la base de datos
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   create_at: Date;
//   update_at: Date;
// }

// type Product = ReturnType<typeof camelcaseKeys<ProductRow>>;

router.get("/", (_req, res) => {
  res.json({ message: "full stock API" });
});

router.get("/categories", categoryController.getCategories);

// router.get("/products", async (_req, res) => {
//   const result = await db.query<ProductRow>("SELECT * FROM products");
//   const products: Product[] = camelcaseKeys(result.rows);
//   res.json({ products });
// });

//de esta forma podemos crear mas rutas, en este caso
//como la estamos refiriendo al otro lado como /api, este ejemplo tomara el nombre de /api/conexion
// router.get("/conexion", (_req, res) => {
//   res.json({ message: "full conexion mediante API" });
// });

export default router;
