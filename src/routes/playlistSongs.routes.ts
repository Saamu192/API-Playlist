import { Router } from "express";
import {
  createPlaylistSongsController,
  listPlaylistSongController,
} from "../controllers/PlaylistSongs.controllers";
import { ensureAuthMiddlewate } from "../middlewares/ensureAuth.middleware";

const playlistSongsRoutes = Router();

playlistSongsRoutes.post(
  "",
  ensureAuthMiddlewate,
  createPlaylistSongsController
);
playlistSongsRoutes.get(
  "/playlist/:id",
  ensureAuthMiddlewate,
  listPlaylistSongController
);

export default playlistSongsRoutes;
