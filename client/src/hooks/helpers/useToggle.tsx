import React from "react";
import { useState } from "react";

type returnType = [boolean, () => void, (val: boolean) => void];

const useToggle = (initialValue: boolean = false): returnType => {
  const [toggled, setToggled] = useState<boolean>(initialValue);

  const toggle = () => {
    setToggled((prev) => !prev);
  };

  const changeToggled = (val: boolean) => {
    setToggled(val);
  };

  return [toggled, toggle, changeToggled];
};

export default useToggle;
