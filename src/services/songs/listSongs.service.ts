import AppDataSource from "../../data-source";
import Songs from "../../entities/song";

const listSongsService = async (): Promise<Songs[]> => {
  const songRepository = AppDataSource.getRepository(Songs);
  const songs = await songRepository.find();
  return songs;
};

export default listSongsService;
