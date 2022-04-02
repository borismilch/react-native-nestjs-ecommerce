import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductImagePicker } from ".";
import CreateForm from "./form/CreateForm";

export const CreateProductContent = () => {
  return (
    <View style={styles.wrapper}>
      <ProductImagePicker />
      <CreateForm />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export { default as ProductImagePicker } from "./images/ProductImagePicker";
export { default as CreateForm } from "./form/CreateForm";
