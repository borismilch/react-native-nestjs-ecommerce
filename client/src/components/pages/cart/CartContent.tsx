import { StyleSheet, View } from "react-native";
import React from "react";
import { useAppSelector } from "hooks/redux";
import { cartItemsSelector } from "store/selectors/cart-selectors.selector";
import { CartItem } from "components/shared/cart";
import { CartPlaceholder, CheckoutButton } from "./";

export const CartContent = () => {
  const cartItems = useAppSelector(cartItemsSelector);
  const isNotEmpty = cartItems.length > 0;

  const cartProducts = cartItems.map((item) => (
    <CartItem count={item.count} product={item.product} />
  ));

  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        {isNotEmpty ? cartProducts : <CartPlaceholder />}
      </View>

      <CheckoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
