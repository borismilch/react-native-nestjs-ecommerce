import React from "react";
import { ProductService } from "service";
import { useMutation, useQuery } from "react-query";
import { useAppSelector } from "hooks/redux";
import { allSelector } from "store/selectors/create-product.slice";
import { ProductPayload } from "models";
import { useRouting } from "hooks";
import Toast from "react-native-toast-message";
import { useAuthStore } from "hooks";
import { useAppDispatch } from "hooks/redux";
import { CreateProducerActions } from "store/actions";
import { useQueryClient } from "react-query";

const useProducts = () => {
  const { navigateTo } = useRouting();
  const { image, images, options } = useAppSelector(allSelector);
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery(
    "products",
    async () => {
      return await ProductService.getAllProducts();
    },
    {}
  );
  const createProductMutation = useMutation(
    async (payload: ProductPayload) => {
      return ProductService.addNewProduct(payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        Toast.show({
          text1: "Product vas successfully created",
        });
        dispatch(CreateProducerActions.clearAll());
        navigateTo("home")();
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const onCreateNewProduct = (
    title: string,
    description: string,
    price: string
  ) => {
    const payload: ProductPayload = {
      title,
      description,
      price: +price,
      image,
      images,
      options,
      avgRating: 0,
      oldPrice: +price,
      userId: user?.id,
    };

    createProductMutation.mutate(payload);
  };
  return {
    products: products?.data || [],
    onCreateNewProduct,
    isLoading: isLoading || isFetching,
  };
};

export default useProducts;
