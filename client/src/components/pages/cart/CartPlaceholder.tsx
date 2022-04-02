import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const CartPlaceholder = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>No items found</Text>
      <LottieView
        autoPlay
        style={styles.lottie}
        loop={false}
        source={require("assets/animations/69177-cart.json")}
      />
    </View>
  );
};

export default CartPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  lottie: {
    width: 200,
    height: 200,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
});
