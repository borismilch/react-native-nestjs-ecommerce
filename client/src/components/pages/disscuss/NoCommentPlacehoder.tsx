import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

interface NoCommentPlaceholderProps {
  text?: string;
}

const NoCommentPlacehoder: React.FC<NoCommentPlaceholderProps> = (props) => {
  const { text } = props;

  return (
    <View style={styles.wrapper}>
      <LottieView
        style={styles.image}
        loop={false}
        autoPlay
        source={require("assets/animations/96537-sad-emoji.json")}
      />
      <Text style={styles.title}>{!!text ? text : "No comments Found"}</Text>
    </View>
  );
};

export default NoCommentPlacehoder;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },

  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
});
