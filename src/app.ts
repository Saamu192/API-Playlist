import express from "express";
import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import appRoutes from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use("", appRoutes);
app.use(handleErrorMiddleware);

app.listen(process.env.PORT, () =>
  console.log(`API Running at ${process.env.PORT}`)
);
