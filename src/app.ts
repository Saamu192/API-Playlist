import express from "express";
import "reflect-metadata";
import "dotenv/config";
import appRoutes from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use("", appRoutes);

app.listen(process.env.PORT, () =>
  console.log(`API Running at ${process.env.PORT}`)
);
