import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PagesSearch } from "./search";
import { Tabs } from "./tabs";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <View style={styles.wrapper}>
      <PagesSearch />
      {children}
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
