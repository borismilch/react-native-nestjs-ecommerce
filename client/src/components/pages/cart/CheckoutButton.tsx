import React from "react";
import { CartButton } from "components/shared/buttons";
import { useAppSelector } from "hooks/redux";
import {
  useRouting,
  useAuthStore,
  usePaymentSheet,
  useOrderService,
} from "hooks";
import {
  cartItemsSelector,
  totalPriceSelector,
} from "store/selectors/cart-selectors.selector";
import { OrderPayload } from "models";

export default function CheckoutScreen() {
  const { user } = useAuthStore();
  const { navigation } = useRouting();
  const cartItems = useAppSelector(cartItemsSelector);
  const totalCost = useAppSelector(totalPriceSelector);
  const { addOrderMutation } = useOrderService();

  const onSuccess = async () => {
    const payload: OrderPayload = {
      prductsIds: cartItems.map((item) => ({
        id: item.product.id,
        count: item.count,
      })),
      userId: user?.id || 0,
      totalCost,
    };

    const { data } = await addOrderMutation.mutateAsync(payload);
    navigation.navigate("order" as never, { order: data } as never);
  };

  const { openPaymentSheet } = usePaymentSheet(onSuccess);

  return (
    <CartButton
      text={"Checkout"}
      disabled={!cartItems.length}
      onPress={openPaymentSheet}
    />
  );
}
