import { axiosInstance } from "lib/axios";

export default class PaymentService {
  static async payOrDie(amount: number) {
    const { data } = await axiosInstance({
      method: "POST",
      data: { amount },
      url: "payment/pay",
    });

    return data;
  }
}
