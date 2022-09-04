import AppDataSource from "../../data-source";
import Songs from "../../entities/song";
import { ISongsRequest } from "../../interfaces/songs.interfaces";

const createSongService = async ({ artist, duration, name }: ISongsRequest) => {
  const songRepository = AppDataSource.getRepository(Songs);

  const song = songRepository.create({
    artist,
    name,
    duration,
  });

  await songRepository.save(song);

  return song;
};

export default createSongService;
