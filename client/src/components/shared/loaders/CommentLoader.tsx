import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const CommentLoader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        loop
        source={require("assets/animations/99589-loader-for-web.json")}
        style={styles.loader}
      />
    </View>
  );
};

export default CommentLoader;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 70,
  },
  loader: {
    width: 290,
    height: 120,
  },
});
