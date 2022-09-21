import { Router } from "express";
import {
  createPlaylistsController,
  listPlaylistsController,
} from "../controllers/playlists.controllers";
import { ensureAuthMiddlewate } from "../middlewares/ensureAuth.middleware";

const playlistsRoutes = Router();

playlistsRoutes.post("", ensureAuthMiddlewate, createPlaylistsController);
playlistsRoutes.get("", listPlaylistsController);

export default playlistsRoutes;
