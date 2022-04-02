import React from "react";
import { useQuery } from "react-query";
import { LikeService } from "service";
import { queryNames } from "constants/.";

const useProductLikes = (id: number) => {
  const { data, isLoading, isFetching } = useQuery(
    queryNames.productLikes + id,
    async () => {
      return LikeService.getProductLikes(id);
    }
  );
  return { data, isLoading, isFetching };
};

export default useProductLikes;
