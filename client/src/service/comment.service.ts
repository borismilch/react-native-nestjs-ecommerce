import { CommentPayload } from "models";
import { axiosInstance } from "lib/axios";

export default class CommentService {
  static async addComment(payload: CommentPayload) {
    const comment = await axiosInstance({
      method: "POST",
      data: payload,
      url: "comment/create",
    });

    return comment;
  }

  static async deleteComment(id: number) {
    const comment = await axiosInstance({
      method: "DELETE",
      url: "comment/" + id,
    });

    return comment;
  }

  static async updateComment(payload: CommentPayload, id: number) {
    const comment = await axiosInstance({
      method: "PUT",
      url: "comment/" + id,
      data: payload,
    });

    return comment;
  }
}
