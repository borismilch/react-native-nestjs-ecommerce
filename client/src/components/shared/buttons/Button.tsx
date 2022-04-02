import { StyleSheet, View } from "react-native";
import React from "react";
import { Button as BButton } from "react-native-elements";
import { ReactElement } from "react";

interface ButtonProps {
  onPress: () => void;
  text: string | ReactElement<any, any>;
  bgColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    text,
    bgColor = "#a15e1b",
    disabled = false,
    isLoading = false,
  } = props;
  return (
    <View style={{ overflow: "hidden", borderRadius: 7 }}>
      <BButton
        onPress={onPress}
        disabled={disabled}
        buttonStyle={styles.wrapper}
        title={text}
        loading={isLoading}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#e47911",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  text: {
    fontSize: 18,

    color: "black",
    fontWeight: "bold",
  },
});
