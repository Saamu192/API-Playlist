import { Request, Response } from "express";
import { IPaymentInfoRequest } from "../interfaces/paymentInfos.interface";
import createPaymentInfosService from "../services/paymentInfos/createPaymentInfos.service";

const createPaymentInfosController = async (req: Request, res: Response) => {
  const { code, dueDate, name, number }: IPaymentInfoRequest = req.body;
  const { id } = req.user;
  const paymentInfo = await createPaymentInfosService(id, {
    code,
    dueDate,
    name,
    number,
  });
  return res.status(201).json(paymentInfo);
};

export { createPaymentInfosController };
