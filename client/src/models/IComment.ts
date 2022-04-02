import { IUser } from "./IUser";

export interface IComment extends CommentPayload {
  id: number;
  timeStamp: Date;
  updatedAt: Date;
  owner: IUser;
}

export interface CommentPayload {
  userId: number;
  productId: number;
  body: string;
  rait: number;
}
