import { config } from "config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const instance = axios.create({
  baseURL: config.API_URL,
  headers,
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  try {
    if (token) {
      config.headers!.Authorization = "Bearer " + token;
    } else {
      config.headers!.Authorization = "";
    }
    return config;
  } catch (e) {}
});

export const axiosInstance = instance;
