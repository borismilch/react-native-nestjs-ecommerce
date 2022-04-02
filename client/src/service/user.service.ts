import { IUpdateUserPayload } from "models";
import { axiosInstance } from "lib/axios";

export default class UserService {
  static async updateUser(userPayload: IUpdateUserPayload, userId: number) {
    console.log(userId);
    const newUser = await axiosInstance({
      method: "PUT",
      data: userPayload,
      url: "users/" + userId,
    });

    return newUser;
  }

  static async getUserStats(userId: number) {
    console.log(userId + " userId");

    const userStats = await axiosInstance({
      method: "GET",
      url: "users/stats/" + userId,
    });

    return userStats;
  }
}
