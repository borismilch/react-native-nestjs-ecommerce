import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserLikes } from "hooks";
import { Product } from "components/shared";
import { PageLoader } from "components/shared/loaders";
import { NoCommentPlacehoder } from "../disscuss";
import { ScrollView } from "react-native";

export const LikesContent = () => {
  const { likes, isLoading } = useUserLikes();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!likes.length) {
    return <NoCommentPlacehoder text="No liked Products" />;
  }

  const ProductItems = likes.map((item) => (
    <Product product={item.product!} key={item.id} />
  ));

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      {ProductItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
