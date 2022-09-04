import AppDataSource from "../../data-source";
import Palylist from "../../entities/playlist.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";

const createPlaylistService = async (name: string, userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const playlistRepository = AppDataSource.getRepository(Palylist);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const playlist = playlistRepository.create({
    name,
    user: user,
  });

  await playlistRepository.save(playlist);

  return playlist;
};

export default createPlaylistService;
