import React from "react";
import { StyleSheet, View } from "react-native";
import { DisscussContent } from "components/pages/disscuss";
import { GoBackButton } from "components/shared/buttons";

const DisscussScreen = () => {
  return (
    <View style={styles.wrapper}>
      <GoBackButton />
      <DisscussContent />
    </View>
  );
};

export default DisscussScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
