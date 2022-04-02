import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OptionsSelector, DisscussProuct } from "./";
import { Carousel } from "components/shared";
import { ScrollView } from "react-native";
import { DetailCaption, ProductOwner } from "./";
import { IProduct } from "models";
import { CartButton } from "components/shared/buttons";
import { useCurrentProduct } from "hooks";
import { PageLoader } from "components/shared/loaders";

export const DetailContent = () => {
  const { isLoading, product } = useCurrentProduct();

  if (!product || isLoading) {
    return <PageLoader />;
  }

  const allRait = product.comments?.reduce(
    (acc, item) => (acc += item.rait),
    0
  );

  const awarageRait = !allRait ? 0 : (allRait as any) / product._count.comments;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <DetailCaption
          awgRating={awarageRait}
          raitings={product._count.comments}
          oldPrice={product.oldPrice!}
          price={product.price!}
          title={product.title}
        />

        <Carousel
          maxHeight={300}
          images={[product.image, ...product.images!]}
        />

        <View style={styles.textwrapper}>
          {product.options && (
            <OptionsSelector options={product.options} image={product.image} />
          )}

          <Text style={[styles.description, { paddingTop: 12 }]}>
            {product.description}
          </Text>
        </View>
        <DisscussProuct
          productId={product.id}
          commentsCount={product?.comments.length || 0}
        />

        <ProductOwner owner={product.owner} />
      </ScrollView>
      <DetailCartButton product={product} />
    </>
  );
};

import { useAppDispatch } from "hooks/redux";
import { CartStore } from "store/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailCartButton: React.FC<{ product: IProduct }> = (props) => {
  const { product } = props;
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(CartStore.addToCart(product));
    console.log(product);
  };

  return (
    <TouchableOpacity onPress={addToCart} style={styles.buttonGroup}>
      <CartButton addPrice={product.price} onPress={() => {}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

  textwrapper: {
    padding: 12,
  },

  buttonGroup: {
    backgroundColor: "white",
  },
  price: {},
  oldPrice: {},
  description: {},
});
