import { ScrollView } from "react-native";
import React from "react";
import { Product } from "components/shared";
import { useProducts } from "hooks";
import { PageLoader } from "components/shared/loaders";
import { productFilter } from "helpers";
import { useAppSelector } from "hooks/redux";
import { searchSelector } from "store/selectors/search.slice";
import { SearchPlaceholder } from "./";

export const HomeProducts = () => {
  const { products, isLoading } = useProducts();
  const { search } = useAppSelector(searchSelector);

  const searchProducts = search
    ? products.filter(productFilter(search))
    : products;

  const ProductItems = searchProducts.map((item) => (
    <Product product={item} key={item.id} />
  ));

  if (isLoading) {
    return <PageLoader />;
  }

  if (!searchProducts.length) {
    return <SearchPlaceholder />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>{ProductItems}</ScrollView>
  );
};
