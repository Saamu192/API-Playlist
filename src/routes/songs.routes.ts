import { Router } from "express";
import {
  createSongsController,
  listSongsController,
} from "../controllers/songs.controllers";
import { ensureAuthMiddlewate } from "../middlewares/ensureAuth.middleware";

const songsRoutes = Router();

songsRoutes.post("", ensureAuthMiddlewate, createSongsController);
songsRoutes.get("", listSongsController);

export default songsRoutes;
