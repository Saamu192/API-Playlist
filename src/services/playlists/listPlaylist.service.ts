import AppDataSource from "../../data-source";
import Palylist from "../../entities/playlist.entity";

const listPlaylistService = async (): Promise<Palylist[]> => {
  const playlistRepository = AppDataSource.getRepository(Palylist);
  const playlist = await playlistRepository.find();
  return playlist;
};

export default listPlaylistService;
