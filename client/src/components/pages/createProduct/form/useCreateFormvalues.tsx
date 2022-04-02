import React from "react";
import { useInputValueArr } from "hooks";
import { requireValidator, lenghtValidator } from "helpers/validators";
import Toast from "react-native-toast-message";
import { useState } from "react";

const useCreateFormValues = (
  callback: (title: string, description: string, price: string) => void
) => {
  const [title, bindTitle, ___, isTitleError, validateTitle] = useInputValueArr(
    "",
    [requireValidator]
  );

  const [
    description,
    bindDescription,
    __,
    isDescriptionError,
    validateDescription,
  ] = useInputValueArr("", [requireValidator, lenghtValidator(30, 2300)]);

  const [price, bindPrice, ____, isPriceError, validatePrice] =
    useInputValueArr("", [requireValidator]);

  const [loading, setLoading] = useState<boolean>(false);

  const validateAll = () => {
    validateDescription();
    validateTitle();
    validatePrice();

    if (isDescriptionError || isTitleError || isPriceError) {
      return false;
    } else {
      return true;
    }
  };

  const createNewProduct = async () => {
    setLoading(true);
    const valid = validateAll();

    if (!valid) {
      setLoading(false);
      return;
    }
    try {
      callback(title, description, price);
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message,
      });
      setLoading(false);
    }
  };

  return {
    createNewProduct,
    title,
    description,
    isDescriptionError,
    isTitleError,
    loading,
    bindDescription,
    bindTitle,
    price,
    bindPrice,
  };
};

export default useCreateFormValues;
