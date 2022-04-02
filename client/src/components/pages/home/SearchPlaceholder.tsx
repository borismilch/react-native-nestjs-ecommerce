import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const SearchPlaceholder = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        loop={false}
        style={styles.image}
        source={require("assets/animations/96526-search-not-found (1).json")}
      />

      <Text style={styles.title}>Items not found</Text>
    </View>
  );
};

export default SearchPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
