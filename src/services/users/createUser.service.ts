import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IUserRequest } from "../../interfaces/users.interfaces";

const createUserService = async ({
  email,
  isAdm,
  name,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!password) {
    throw new AppError("Password is a required field", 401);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    password: hashedPassword,
    email,
    isAdm,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
