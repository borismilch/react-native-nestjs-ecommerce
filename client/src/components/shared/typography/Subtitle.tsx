import { Text, View } from "react-native";
import React from "react";

interface TitleProps {
  numberOfLines?: number;
  size?: number;
}

const Title: React.FC<TitleProps> = (props) => {
  const { numberOfLines = 2, size = 15, children } = props;

  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
      {children}
    </Text>
  );
};

export default Title;
