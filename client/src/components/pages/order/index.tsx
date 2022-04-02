import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Order } from "models";
import LottieView from "lottie-react-native";
import { OrderList } from "./";
import { Button } from "components/shared/";
import { useRouting } from "hooks";
import { SafeAreaView } from "react-native";

export const OrderContent = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<{ params: { order: Order } }>>();

  const { navigateTo } = useRouting();

  return (
    <SafeAreaView style={styles.contentWrapper}>
      <View style={{ maxHeight: 280, alignItems: "center" }}>
        <LottieView
          autoPlay
          loop={false}
          style={styles.image}
          source={require("assets/animations/23212-order-packed.json")}
        />
      </View>

      <Text style={styles.title}>
        Wait a few minutes before getting an order
      </Text>

      <OrderList cartItems={order.shippings!} />

      <Button onPress={navigateTo("home")} text="Go to home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 10,
    paddingTop: 60,
    width: "100%",
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
  },

  title: {
    fontSize: 25,
    marginHorizontal: 20,
    paddingVertical: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export { default as OrderItem } from "./OrderItem";
export { default as OrderList } from "./OrderList";
