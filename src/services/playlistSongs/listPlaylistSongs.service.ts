import AppDataSource from "../../data-source";
import Palylist from "../../entities/playlist.entity";
import AppError from "../../errors/appError";

const listPlaylistSongsService = async (
  idPlaylist: string
): Promise<Palylist> => {
  const playlistRepository = AppDataSource.getRepository(Palylist);

  const playlist = await playlistRepository.findOne({
    where: {
      id: idPlaylist,
    },
    relations: {
      playlistSongs: true,
    },
  });

  if (!playlist) {
    throw new AppError("Playlist not found", 404);
  }

  return playlist;
};

export default listPlaylistSongsService;
