import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { default as fakeTabs } from "./fakeTabs";
import { SingleTab } from ".";

export const Tabs = () => {
  return (
    <View style={styles.wrapper}>
      {fakeTabs.map((tab) => (
        <SingleTab key={tab.to} tab={tab} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f8fafc",
  },
});

export { default as SingleTab } from "./SingleTab";
