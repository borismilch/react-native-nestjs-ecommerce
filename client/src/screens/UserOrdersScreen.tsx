import React from "react";
import { StyleSheet, View } from "react-native";
import { UserOrdersScreenContent } from "components/pages/userOrders";
import { Tabs } from "components/layout/tabs";
import { GoBackButton } from "components/shared/buttons";

const UserOrdersScreen = () => {
  return (
    <View style={styles.wrapper}>
      <GoBackButton />
      <UserOrdersScreenContent />
      <Tabs />
    </View>
  );
};

export default UserOrdersScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
