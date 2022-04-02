import { OrderPayload } from "models";
import React from "react";
import { useMutation } from "react-query";
import { OrderService } from "service";

const useOrderService = () => {
  const addOrderMutation = useMutation(
    async (payload: OrderPayload) => {
      return await OrderService.createOrder(payload);
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return { addOrderMutation };
};

export default useOrderService;
