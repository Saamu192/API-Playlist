import AppDataSource from "../../data-source";
import Palylist from "../../entities/playlist.entity";
import PlaylistSongs from "../../entities/playlistSongs.entity";
import Songs from "../../entities/song";
import AppError from "../../errors/appError";
import { IPlaylistSongsRequest } from "../../interfaces/playlistSongs.interface";

const createPlaylistSongsService = async ({
  idPlaylist,
  idSong,
}: IPlaylistSongsRequest) => {
  const songRepository = AppDataSource.getRepository(Songs);
  const playlistRepository = AppDataSource.getRepository(Palylist);
  const playlistSongRepository = AppDataSource.getRepository(PlaylistSongs);

  const playlist = await playlistRepository.findOneBy({
    id: idPlaylist,
  });

  const song = await songRepository.findOneBy({
    id: idSong,
  });

  if (!playlist || !song) {
    throw new AppError("Palylist or song not found", 404);
  }

  await playlistSongRepository.save({
    playlist: playlist,
    song: song,
  });

  return true;
};

export default createPlaylistSongsService;
