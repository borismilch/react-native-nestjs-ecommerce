import React from "react";
import { ProfileContent } from "components/pages/profile";
import { Tabs } from "components/layout/tabs";
import { View, StyleSheet } from "react-native";
import { GoBackButton } from "components/shared/buttons";

const ProfileScreen = () => {
  return (
    <View style={styles.wrapper}>
      <GoBackButton />
      <ProfileContent />
      <Tabs />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
