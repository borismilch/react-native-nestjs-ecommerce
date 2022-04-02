import { StyleSheet, View } from "react-native";
import React from "react";
import { RoundCardContainer } from "components/shared/containers";
import { Input } from "react-native-elements";
import { useCreateFormValues, CreateChips, FormImageUploader } from "./";
import { Button } from "components/shared/buttons";
import { useProducts } from "hooks";

const CreateForm = () => {
  const { onCreateNewProduct } = useProducts();

  const {
    bindTitle,
    isTitleError,
    bindPrice,
    bindDescription,
    isDescriptionError,
    createNewProduct,
  } = useCreateFormValues(onCreateNewProduct);

  return (
    <RoundCardContainer backgroundColor="white">
      <View style={styles.wrapper}>
        <Input
          {...bindTitle}
          placeholder="Title..."
          errorMessage={
            isTitleError
              ? "title is required and must ne more than 3 symbols"
              : ""
          }
          errorStyle={{ fontSize: 10 }}
        />
        <Input
          {...bindDescription}
          placeholder="Description..."
          errorMessage={
            isDescriptionError
              ? "descriptions is required and must ne more than 30 symbols and less than "
              : ""
          }
          errorStyle={{ fontSize: 10 }}
        />

        <Input
          {...bindPrice}
          placeholder="Price..."
          keyboardType="numeric"
          errorMessage={
            isDescriptionError
              ? "price is required and must ne more than 3 and less than 10000"
              : ""
          }
          errorStyle={{ fontSize: 10 }}
        />

        <CreateChips />
        <FormImageUploader />

        <Button onPress={createNewProduct} text="Publish new product" />
      </View>
    </RoundCardContainer>
  );
};

export default CreateForm;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
