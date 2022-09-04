import { Request, Response } from "express";
import { IUserSessionRequest } from "../interfaces/users.interfaces";
import createSessionService from "../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const { email, password }: IUserSessionRequest = req.body;
  const token = await createSessionService({ email, password });
  return res.json({ token });
};

export { createSessionController };
