import React from "react";
import { useInputValueArr } from "hooks";
import { requireValidator, lenghtValidator } from "helpers/validators";
import Toast from "react-native-toast-message";
import { useState } from "react";
import { useAuthStore } from "hooks";

const useChangeProlifeForm = (
  callback: (name: string, bio: string) => void
) => {
  const { user } = useAuthStore();

  const [name, bindName, ___, isNameError, validateName] = useInputValueArr(
    user?.name || "",
    [requireValidator, lenghtValidator(3, 23)]
  );
  const [bio, bindBio, __, isBioError, validateBio] = useInputValueArr(
    user?.bio || "",
    [requireValidator]
  );
  const [loading, setLoading] = useState<boolean>(false);

  const validateAll = () => {
    validateBio();
    validateName();

    if (isBioError || isNameError) {
      return false;
    } else {
      return true;
    }
  };

  const changeUser = async () => {
    setLoading(true);
    const valid = validateAll();

    if (!valid) {
      setLoading(false);
      return;
    }
    try {
      callback(name, bio);
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message,
      });
      console.log(e.message, e);
      setLoading(false);
    }
  };

  return {
    changeUser,
    name,
    bio,
    isBioError,
    isNameError,
    loading,
    bindBio,
    bindName,
  };
};

export default useChangeProlifeForm;
