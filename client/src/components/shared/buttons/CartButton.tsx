import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "./";
import { useAppSelector } from "hooks/redux";
import { totalPriceSelector } from "store/selectors/cart-selectors.selector";

interface CartButtonProps {
  onPress: () => void;
  addPrice?: number;
  text?: string;
  disabled?: boolean;
}

const CartButton: React.FC<CartButtonProps> = (props) => {
  const { onPress, addPrice, text, disabled = false } = props;
  const totalPrice = useAppSelector(totalPriceSelector);

  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      text={
        <PriceSelectors
          text={text}
          addPrice={addPrice}
          totalPrice={totalPrice}
        />
      }
    />
  );
};

interface PriceSelectorsProps {
  addPrice?: number;
  totalPrice: number;
  text?: string;
}

const PriceSelectors: React.FC<PriceSelectorsProps> = React.memo((props) => {
  const { addPrice, totalPrice, text = "Add to cart" } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.buttonTitle}>{text}</Text>
      <View style={styles.wrapper}>
        {addPrice && (
          <Text style={styles.addPrice}>
            {Math.round(addPrice) + "$" + " +"}
          </Text>
        )}
        <Text style={styles.totalSum}>{Math.round(totalPrice) + "$"}</Text>
      </View>
    </View>
  );
});

export default CartButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    right: 10,
  },

  addPrice: {
    opacity: 0.7,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  totalSum: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  container: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
});
