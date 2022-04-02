import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Order } from "models";
import { TouchableOpacity } from "react-native";
import { useRouting } from "hooks";

interface OrderItemProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { navigateTo } = useRouting();
  const { order } = props;

  const { shippings } = order;

  const [{ product }] = shippings!;
  const totalCount: number = shippings!.reduce(
    (acc, item) => (acc += item.count),
    0
  );

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={navigateTo("order", { order })}
    >
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
          <Text style={styles.count}>shippings: {totalCount}</Text>

          <Text style={styles.price}>{product.price * totalCount}$</Text>
        </View>

        <Text style={styles.viewMore}>View more...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

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

  viewMore: {
    color: "#06b6d4",
    fontWeight: "bold",
    fontSize: 14,
  },
});
