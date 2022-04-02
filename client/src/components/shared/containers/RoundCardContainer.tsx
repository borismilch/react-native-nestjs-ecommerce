import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

interface RoundCardContainerProps {
  backgroundColor?: string;
  children: ReactElement<any, any>;
}

const RoundCardContainer: React.FC<RoundCardContainerProps> = (props) => {
  const { backgroundColor = "white", children } = props;

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      borderColor: "#ddd",
      backgroundColor,
      borderWidth: 1,
    },
  });
  return <View style={styles.wrapper}>{children}</View>;
};

export default RoundCardContainer;
