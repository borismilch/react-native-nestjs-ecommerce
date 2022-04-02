import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

const useRouting = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const navigateTo = (path: string, options: any = {}) => {
    return () => navigation.navigate(path as never, options as never);
  };

  const backRouter = (isCarry: boolean): any => {
    return isCarry
      ? () => {
          navigation.goBack();
        }
      : navigation.goBack();
  };

  return { navigation, navigateTo, route, backRouter };
};

export default useRouting;
