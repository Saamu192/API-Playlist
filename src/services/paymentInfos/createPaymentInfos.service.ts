import AppDataSource from "../../data-source";
import PaymentInfo from "../../entities/paymentinfo.entity";
import User from "../../entities/users.entity";
import { IPaymentInfoRequest } from "../../interfaces/paymentInfos.interface";

const createPaymentInfosService = async (
  userId: string,
  { code, dueDate, name, number }: IPaymentInfoRequest
): Promise<PaymentInfo> => {
  const userRepository = AppDataSource.getRepository(User);
  const paymentInfoRepository = AppDataSource.getRepository(PaymentInfo);

  const paymentInfo = paymentInfoRepository.create({
    code,
    dueDate,
    name,
    number,
  });

  await paymentInfoRepository.save(paymentInfo);

  await userRepository.update(userId, { paymentInfo: paymentInfo });

  return paymentInfo;
};

export default createPaymentInfosService;
