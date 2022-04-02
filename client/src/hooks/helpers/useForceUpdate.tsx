import React from "react";
import { useState } from "react";

const useForceUpdate = () => {
  const [value, setValue] = useState<boolean>(false);

  const forceUpdate = () => {
    setValue((prev) => !prev);
  };

  return { forceUpdate };
};

export default useForceUpdate;
