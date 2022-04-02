import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

interface OptionSelectorWrapperProps {
  image: string;
  onPress: () => void;
}

const OptionSelectorWrapper: React.FC<OptionSelectorWrapperProps> = (props) => {
  const { image, children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      {children}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
};

export default OptionSelectorWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  imageWrapper: {
    width: 80,
    height: 40,
    flexShrink: 0,
    position: "relative",
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
