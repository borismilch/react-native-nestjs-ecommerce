import React from "react";
import { useRef, useState } from "react";
import { useToggle } from "hooks";
import { TextInput } from "react-native";

const useOptions = (options: string[]) => {
  const [isVisible, toggleIsIvsible] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const inputRef = useRef<TextInput>(null);

  const onClose = () => {
    inputRef.current!.blur();
    toggleIsIvsible();
  };

  const onSelect = (val: string) => {
    setSelectedOption(val);
    onClose();
  };

  const onOpen = () => {
    console.log("opened");
    inputRef.current!.blur();
    toggleIsIvsible();
  };

  return { onOpen, onClose, onSelect, isVisible, selectedOption, inputRef };
};

export default useOptions;
