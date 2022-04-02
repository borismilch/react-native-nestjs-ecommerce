import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { OrderItem } from "./";
import { ICartItem } from "models";

interface OrderListProps {
  cartItems: ICartItem[];
}

const OrderList: React.FC<OrderListProps> = (props) => {
  const { cartItems } = props;

  const orders = cartItems.map((item) => <OrderItem orderItem={item} />);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      {orders}
    </ScrollView>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: 300,
  },
});
