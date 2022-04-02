import {
  IUser,
  LoginPayload,
  RegisterPayload,
  IUpdateUserPayload,
} from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "lib/axios";
import { AxiosResponse } from "axios";

export default class UserService {
  static async login(payload: LoginPayload): Promise<any> {
    const { data } = await axiosInstance("auth/login", {
      method: "POST",
      data: payload,
    });

    AsyncStorage.setItem("token", data.acess_token);
  }

  static async register(payload: RegisterPayload) {
    const { data } = await axiosInstance("auth/register", {
      method: "POST",
      data: payload,
    });

    AsyncStorage.setItem("token", data.acess_token);
  }

  static async updateUser(id: number, payload: IUpdateUserPayload) {
    const { data } = await axiosInstance("user/" + id, {
      method: "PUT",
      data: payload,
    });

    AsyncStorage.setItem("token", data.acess_token);
  }

  static async singnInWithProvider(credentials: RegisterPayload) {
    const { data } = await axiosInstance("auth/provider", {
      method: "POST",
      data: credentials,
    });

    AsyncStorage.setItem("token", data.acess_token);
  }

  static async getCurrentUser(): Promise<AxiosResponse<IUser>> {
    return await axiosInstance.get("users/me");
  }

  static logoutUser(): void {
    AsyncStorage.removeItem("token");
  }

  static createUser(
    name: string,
    email: string,
    password: string
  ): RegisterPayload {
    const user: RegisterPayload = {
      name,
      email,
      password,
      picture: "https://avatars.dicebear.com/api/initials/" + email + ".svg",
    };

    return user;
  }
}
