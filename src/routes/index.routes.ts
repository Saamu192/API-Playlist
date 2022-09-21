import { Router } from "express";
import paymentInfoRoutes from "./paymentinfo.routes";
import playlistsRoutes from "./playlist.routes";
import playlistSongsRoutes from "./playlistSongs.routes";
import sessionRoutes from "./session.routes";
import songsRoutes from "./songs.routes";
import userRoutes from "./user.routes";

const appRoutes = Router();

appRoutes.use("/users", userRoutes);
appRoutes.use("/songs", songsRoutes);
appRoutes.use("/login", sessionRoutes);
appRoutes.use("/playlist", playlistsRoutes);
appRoutes.use("/payment", paymentInfoRoutes);
appRoutes.use("playlistsongs", playlistSongsRoutes);

export default appRoutes;
