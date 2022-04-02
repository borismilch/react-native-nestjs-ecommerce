import { ProductPayload, IProduct, IDetailedProduct } from "models";
import { axiosInstance } from "lib/axios";
import { AxiosResponse } from "axios";

export default class ProductService {
  static async addNewProduct(payload: ProductPayload): Promise<IProduct> {
    const { data: newPost } = await axiosInstance({
      method: "POST",
      url: "product/add",
      data: payload,
    });

    return newPost;
  }

  static async getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    const products = await axiosInstance({
      method: "GET",
      url: "product/all",
    });

    return products as any;
  }

  static async getCurrentProduct(
    id: number
  ): Promise<AxiosResponse<IDetailedProduct>> {
    const product = await axiosInstance({
      method: "GET",
      url: "product/" + id,
    });

    return product;
  }

  static async getAllProductComments(id: number) {
    const comments = await axiosInstance({
      method: "GET",
      url: "product/" + id + "/comments",
    });

    console.log(comments);

    return comments;
  }

  static async searchForProducts(query: string) {
    const products = await axiosInstance({
      method: "GET",
      url: "search/" + query,
    });

    return products;
  }
}
