import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { TextInput } from "react-native-gesture-handler";

type ValidatorFucntion = (val: string) => boolean;

const useInputValue = (
  initialValue: string,
  validators: ValidatorFucntion[] = []
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const inputref = useRef<TextInput>(null);

  const changeValue = (val: string) => {
    setValue(val);
  };

  const cleanValue = () => {
    setValue("");
  };

  const onBack = () => {
    inputref.current?.blur();
  };

  const validate = () => {
    setError(false);
    const tests = validators.map((validator) => validator(value));

    setError(tests.includes(false));
  };

  return { value, changeValue, cleanValue, validate, error, inputref, onBack };
};

export default useInputValue;
