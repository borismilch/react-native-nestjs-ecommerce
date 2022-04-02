import { config } from "config";

export default class FileService {
  static async uploadFile<T extends FormData>(formData: T): Promise<string> {
    console.log("file upload started");
    const result = await fetch(config.API_URL + "file/upload", {
      method: "POST",
      body: formData,
    });

    const url = await result.text();

    return url;
  }
}
