import React from "react";
import { useQuery } from "react-query";
import { queryNames } from "constants/.";
import { ProductService } from "service";
import { IProduct } from "models";

const useProductSearch = (
  query: string
): { data: IProduct[]; isLoading: boolean } => {
  const { data, isLoading } = useQuery(queryNames.searchPosts, async () => {
    return ProductService.searchForProducts(query);
  });
  return { data: data?.data || [], isLoading };
};

export default useProductSearch;
