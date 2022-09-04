import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IUserSessionRequest } from "../../interfaces/users.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({
  email,
  password,
}: IUserSessionRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  if (!user.isActive) {
    throw new AppError("Invalid user", 401);
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "2h",
    }
  );
  return token;
};

export default createSessionService;
