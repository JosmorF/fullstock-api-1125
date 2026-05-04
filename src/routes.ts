import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "full stock API" });
});

//de esta forma podemos crear mas rutas, en este caso
//como la estamos refiriendo al otro lado como /api, este ejemplo tomara el nombre de /api/conexion
// router.get("/conexion", (_req, res) => {
//   res.json({ message: "full conexion mediante API" });
// });

export default router;
