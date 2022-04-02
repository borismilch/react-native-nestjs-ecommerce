import { IUser, IComment } from "./";

export interface IProduct extends ProductPayload {
  id: number;
  ratings: number;
  createdAt?: Date;
  updatedAt?: Date;
  _count: {
    comments: number;
  };
  comments?: IComment[];
}

export interface ICartItem {
  count: number;
  product: IProduct;
}

export interface ProductPayload {
  price: number;
  title: string;
  image: string;
  images: string[];
  avgRating: number;
  options: string[];
  oldPrice: number;
  description: string;
  userId?: number;
}

export interface IDetailedProduct extends IProduct {
  comments: IComment[];
  owner: IUser;
}

export interface ICartItem {
  count: number;
  product: IProduct;
}
