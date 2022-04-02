import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProduct } from "models";
import { StarRaiting } from "../";
import { CartActions } from "./";
import { Button } from "react-native-elements";

interface ProductProps {
  product: IProduct;
  count: number;
}

const CartItem: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const navigator = useNavigation();
  const pushNavigation = () => {
    navigator.navigate(
      "detail" as never,
      {
        product,
      } as never
    );
  };

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />

      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>
          {product.title}
        </Text>

        <StarRaiting rait={product.avgRating} votes={product.ratings} />

        <CartActions productId={product.id} />
      </View>

      <Button
        onPress={pushNavigation}
        buttonStyle={styles.viewButton}
        title={"Show"}
      />
    </View>
  );
};

export default React.memo(CartItem);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    margin: 6,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#d1d1d1",
    backgroundColor: "white",
    alignItems: "center",
  },
  container: {
    padding: 10,
    flex: 1,
  },

  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    maxWidth: 150,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewButton: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
