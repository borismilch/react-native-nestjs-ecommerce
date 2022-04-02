import React from "react";
import { useState } from "react";

interface BindProps {
  value: string;
  onChangeText: (val: string) => void;
}

type returnType = [string, BindProps, () => void, boolean, () => void];

const useInputValue = (
  initialValue: string = "",
  validators: ((val: string) => boolean)[] = []
): returnType => {
  const [value, setValue] = useState(initialValue);
  const [isError, setIsError] = useState<boolean>(false);

  const cleanValue = () => [setValue("")];

  const onChangeText = (val: string) => {
    setValue(val);
  };

  const validate = () => {
    const tests = validators.map((validator) => validator(value));
    const passed = !tests.includes(false);

    console.log(passed + "  res");

    if (!passed) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const bind = {
    value,
    onChangeText,
  };

  return [value, bind, cleanValue, isError, validate];
};

export default useInputValue;
