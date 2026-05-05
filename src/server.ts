import app from "./app.ts";
import * as db from "./db/index.ts";

const PORT = process.env["PORT"] ?? 3000;

try {
  await db.query("SELECT 1");
} catch (error) {
  console.error("sin conexion", error);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log("servidor corriendo en el puerto: ", PORT);
});
