import { ICartItem, IProduct } from "./IProduct";

export type Order = {
  id: number;
  totalCost: number;
  userId: number;
  timeStamp: Date;
  updatedAt: Date;
  shippings?: ICartItem[];
};

export interface OrderPayload {
  totalCost: number;
  prductsIds: { id: number; count: number }[];
  userId: number;
}
