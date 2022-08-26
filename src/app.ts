import express from "express";
import "reflect-metadata";
import "dotenv/config";

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`API Running at ${process.env.PORT}`)
);
