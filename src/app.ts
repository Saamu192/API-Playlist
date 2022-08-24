import express from "express";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => `API Running at ${process.env.PORT}`);

export default app;
