import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const PageLoader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        loop
        autoPlay
        style={styles.loader}
        source={require("../../../assets/animations/98195-loader.json")}
      />
    </View>
  );
};

export default PageLoader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    width: 150,
    height: 150,
  },
});
