import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useAsyncMounted = (delay: number = 0) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), delay);
    console.log("dsdskl");
  }, []);

  return { mounted };
};

export default useAsyncMounted;
