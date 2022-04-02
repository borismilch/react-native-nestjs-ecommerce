import { IProduct } from "./IProduct";

export interface ILikePayload {
  userId: number;
  productId: number;
  product?: IProduct;
}

export interface ILike extends ILikePayload {
  id: number;
}
