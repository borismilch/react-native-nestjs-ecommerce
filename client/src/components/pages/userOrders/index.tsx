import { StyleSheet, ScrollView, Text, View } from "react-native";
import React from "react";
import { useUserOrders } from "hooks";
import { PageLoader } from "components/shared/loaders";
import { OrderItem } from ".";
import { NoCommentPlacehoder } from "../disscuss";

export const UserOrdersScreenContent = () => {
  const { isLoading, orders } = useUserOrders();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isLoading && !orders.length) {
    return <NoCommentPlacehoder text="No orders found :(" />;
  }

  const orderComponents = orders?.map((item) => (
    <OrderItem key={item.id} order={item} />
  ));

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <Text style={styles.title}>All you orders</Text>
      {orderComponents}
      <View style={{ height: 40 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
});

export { default as OrderItem } from "./OrderItem";
