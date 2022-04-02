import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ICartItem } from "models";

interface ProductProps {
  orderItem: ICartItem;
}

const OrderItem: React.FC<ProductProps> = (props) => {
  const {
    orderItem: { count, product },
  } = props;

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

        <View style={styles.sum}>
          <Text style={styles.count}>Count: {count}</Text>

          <Text style={styles.price}>{product.price * count}$</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(OrderItem);

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
  count: {
    fontWeight: "bold",
    fontSize: 14,
  },

  sum: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 6,
  },
});
