import express from "express";
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/error.middleware.ts";
import router from "./routes.ts";

const app = express();

app.get("/health", (_req, res) => {
  //este end point se consulta constantemente para verificar
  //que el servidor está respondiendo correctamente
  res.json({ status: "ok" });
});

app.use("/api", router);

//Aqui se ponen los middelwares de error
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
