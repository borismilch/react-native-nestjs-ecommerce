import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth.provider";

const useAuthStore = () => {
  return useContext(AuthContext);
};

export default useAuthStore;
