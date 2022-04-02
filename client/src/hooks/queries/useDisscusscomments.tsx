import React from "react";
import { useQuery } from "react-query";
import { ProductService } from "service";
import { RouteProp, useRoute } from "@react-navigation/native";
import { IComment } from "models";
import { queryNames } from "constants/.";

const useDisscusscomments = () => {
  const {
    params: { productId },
  } = useRoute<RouteProp<{ params: { productId: number } }>>();

  const { data, isLoading, isFetching } = useQuery(
    queryNames.comments + productId,
    async () => {
      return ProductService.getAllProductComments(productId);
    }
  );

  return {
    comments: data?.data as IComment[],
    isLoading: isLoading || isFetching,
    productId,
  };
};

export default useDisscusscomments;
