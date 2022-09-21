import { Router } from "express";
import { createPaymentInfosController } from "../controllers/paymentInfos.controllers";
import { ensureAuthMiddlewate } from "../middlewares/ensureAuth.middleware";

const paymentInfoRoutes = Router();

paymentInfoRoutes.post("", ensureAuthMiddlewate, createPaymentInfosController);

export default paymentInfoRoutes;
