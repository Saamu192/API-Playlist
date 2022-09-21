import { Request, Response } from "express";
import { ISongsRequest } from "../interfaces/songs.interfaces";
import createSongService from "../services/songs/createSongs.service";
import listSongsService from "../services/songs/listSongs.service";

const createSongsController = async (req: Request, res: Response) => {
  const { artist, duration, name }: ISongsRequest = req.body;
  const song = await createSongService({ artist, duration, name });
  return res.status(201).json(song);
};

const listSongsController = async (req: Request, res: Response) => {
  const songs = await listSongsService();
  return res.json(songs);
};

export { createSongsController, listSongsController };
