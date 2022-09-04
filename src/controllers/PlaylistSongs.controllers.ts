import { Request, Response } from "express";
import { IPlaylistSongsRequest } from "../interfaces/playlistSongs.interface";
import createPlaylistSongsService from "../services/playlistSongs/createPlaylistSongs.service";
import listPlaylistSongsService from "../services/playlistSongs/listPlaylistSongs.service";

const createPlaylistSongsController = async (req: Request, res: Response) => {
  const { idPlaylist, idSong }: IPlaylistSongsRequest = req.body;
  await createPlaylistSongsService({ idPlaylist, idSong });
  return res.status(201).json({ message: "Song created with sucess" });
};

const listPlaylistSongController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const playlistSongs = await listPlaylistSongsService(id);
  return res.json(playlistSongs);
};

export { createPlaylistSongsController, listPlaylistSongController };
