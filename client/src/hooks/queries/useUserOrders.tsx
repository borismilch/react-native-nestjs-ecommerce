import React from "react";
import { useQuery } from "react-query";
import { queryNames } from "constants/.";
import { OrderService } from "service";
import { useAuthStore } from "hooks";
import { Order } from "models";

type returnType = {
  isLoading: boolean;
  orders: Order[];
};

const useUserOrders = (): returnType => {
  const { user } = useAuthStore();
  const { data, isLoading, isFetching } = useQuery(
    queryNames.userOrders,
    async () => await OrderService.getUserOrders(user?.id || 0)
  );

  return { isLoading: isLoading || isFetching, orders: data?.data || [] };
};

export default useUserOrders;
