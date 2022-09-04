import { Router } from "express";
import userRoutes from "./user.routes";

const appRoutes = Router();

appRoutes.use("/users", userRoutes);

export default appRoutes;
