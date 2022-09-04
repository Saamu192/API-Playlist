import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IUserUpdateRequest } from "../../interfaces/users.interfaces";

const updateUserService = async (
  id: string,
  { email, isAdm, name, password }: IUserUpdateRequest
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    email: email ? email : findUser.email,
    name: name ? name : findUser.name,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
