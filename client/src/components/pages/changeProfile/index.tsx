import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChangeProfileForm } from ".";

export const ChangeProfileContent = () => {
  return (
    <View style={styles.wrapper}>
      <ChangeProfileForm />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});

export { default as ChangeProfileForm } from "./ChangeProfileForm";
export { default as useChangeProfileForm } from "./useChangeProlifeForm";
export { default as ChangeAvatar } from "./ChangeAvatar";
