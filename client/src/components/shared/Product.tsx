import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StarRaiting } from ".";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { IProduct } from "models";
import { default as LikesSection } from "./product/LikesSection";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const navigator = useNavigation();
  const pushNavigation = () => {
    navigator.navigate(
      "detail" as never,
      {
        productId: product.id,
      } as never
    );
  };

  const allRait = product.comments?.reduce(
    (acc, item) => (acc += item.rait),
    0
  );

  const avarageRait = !allRait ? 0 : (allRait as any) / product._count.comments;

  return (
    <TouchableOpacity onPress={pushNavigation} style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />

      <View style={styles.container}>
        <Text numberOfLines={3} style={styles.title}>
          {product.title}
        </Text>

        <StarRaiting rait={avarageRait} votes={product._count.comments} />

        <Text style={styles.price}>from {"$" + product.price}</Text>
      </View>

      <LikesSection productId={product.id} />
    </TouchableOpacity>
  );
};

export default React.memo(Product);

const styles = StyleSheet.create({
  wrapper: {
    margin: 9,
    position: "relative",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#d1d1d1",
    backgroundColor: "white",
  },
  container: {
    padding: 10,
    flex: 1,
  },

  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
