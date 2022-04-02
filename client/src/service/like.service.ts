import { AxiosResponse } from "axios";
import { axiosInstance } from "lib/axios";
import { ILike, ILikePayload } from "models";

export default class LikeService {
  static async likeProduct(
    payload: ILikePayload,
    liked: boolean,
    likeId: number
  ) {
    if (liked) {
      await axiosInstance({
        method: "DELETE",
        url: "like/" + likeId,
      });

      return null;
    } else {
      const { data } = await axiosInstance({
        method: "POST",
        data: payload,
        url: "like/like",
      });

      return data;
    }
  }

  static async getProductLikes(
    productId: number
  ): Promise<AxiosResponse<ILike[]>> {
    const likes = await axiosInstance({
      method: "GET",
      url: "like/product/" + productId,
    });

    return likes;
  }

  static async getUsersLikes(userId: number): Promise<AxiosResponse<ILike[]>> {
    const likes = await axiosInstance({
      method: "GET",
      url: "like/user/" + userId,
    });

    return likes;
  }
}
