import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createPlaylistService from "../services/playlists/createPlaylist.service";
import listPlaylistService from "../services/playlists/listPlaylist.service";

const createPlaylistsController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { name } = req.body;
  const playlist = await createPlaylistService(name, id);
  return res.status(201).json(playlist);
};

const listPlaylistsController = async (req: Request, res: Response) => {
  const playlist = await listPlaylistService();
  return res.json(instanceToPlain(playlist));
};

export { createPlaylistsController, listPlaylistsController };
