import app from "./app.ts";
import * as db from "./db/index.ts";

const PORT = process.env["PORT"] ?? 3000;

try {
  //   Migraciones y conexión de bases de datos con TypeScript
  // 53:00 04/29 pero en la fecha es 28/04

  const result = await db.query("SELECT * from categories");
  console.log(result.rows);
} catch (error) {
  console.error("sin conexion", error);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log("servidor corriendo en el puerto: ", PORT);
});
