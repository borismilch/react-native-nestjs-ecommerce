import { Order, OrderPayload } from "models";
import { axiosInstance } from "lib/axios";
import { AxiosResponse } from "axios";

export default class OrderService {
  static async createOrder(
    payload: OrderPayload
  ): Promise<AxiosResponse<Order>> {
    const newProduct = await axiosInstance({
      method: "POST",
      data: payload,
      url: "order/add",
    });

    return newProduct;
  }

  static async getUserOrders(userId: number) {
    const usersProducts = await axiosInstance({
      method: "GET",
      url: "order/user/" + userId,
    });

    return usersProducts;
  }
}
