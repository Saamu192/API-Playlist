import { Request, Response } from "express";
import {
  IUserRequest,
  IUserUpdateRequest,
} from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";

const deletePassword = ({ password, ...rest }: IUserRequest) => {
  return rest;
};

const createUserController = async (req: Request, res: Response) => {
  const { email, isAdm, name, password }: IUserRequest = req.body;
  const user = await createUserService({ email, isAdm, name, password });
  const payload = deletePassword(user);
  return res.status(201).json(payload);
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  const payload = users.map((element) => deletePassword(element));
  return res.json(payload);
};

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, name, password, isAdm }: IUserUpdateRequest = req.body;
  const updatedUser = await updateUserService(id, {
    email,
    name,
    isAdm,
    password,
  });
  return res.json(updatedUser);
};

export { createUserController, listUserController, updateUserController };
