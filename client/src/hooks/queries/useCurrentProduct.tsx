import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import { ProductService } from "service";

const useCurrentProduct = () => {
  const {
    params: { productId },
  } = useRoute<RouteProp<{ params: { productId: number } }>>();

  const { data, isLoading, refetch, isFetching } = useQuery(
    "currentProduct",
    async () => {
      return await ProductService.getCurrentProduct(productId);
    },
    {}
  );

  return {
    product: data?.data,
    isLoading: isLoading || isFetching,
    refetch,
    productId,
  };
};

export default useCurrentProduct;
