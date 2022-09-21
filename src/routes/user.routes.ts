import { Router } from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/users.controllers";
import { ensureAuthMiddlewate } from "../middlewares/ensureAuth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import userSchema from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post("", validationMiddleware(userSchema), createUserController);
userRoutes.get("", ensureAuthMiddlewate, listUserController);

export default userRoutes;
