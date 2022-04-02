import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "../buttons";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { CartStore } from "store/actions";
import { cartSelector } from "store/selectors/cart-selectors.selector";

interface CartItemActionsProps {
  productId: number;
}

const CartItemActions: React.FC<CartItemActionsProps> = (props) => {
  const { productId } = props;
  const dispath = useAppDispatch();
  const cart = useAppSelector(cartSelector);

  const incrementCount = () => {
    dispath(CartStore.addToCart(productId));
  };

  const removeWithCardid = () => {
    dispath(CartStore.removeFormCart(productId));
  };

  return (
    <View style={styles.wrapper}>
      <IconButton
        style={styles.IconButton}
        Icon={<Feather name="minus" size={24} color="black" />}
        onPress={removeWithCardid}
      />

      <Text style={{ fontWeight: "bold", fontSize: 17 }}>
        {"  "}
        {cart[productId].count}
        {"  "}
      </Text>

      <IconButton
        style={styles.IconButton_add}
        Icon={<Feather name="plus" size={24} color="white" />}
        onPress={incrementCount}
      />
    </View>
  );
};

export default React.memo(CartItemActions);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  IconButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "#f1f1f1",
  },

  IconButton_add: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "#f59e0b",
  },
});
