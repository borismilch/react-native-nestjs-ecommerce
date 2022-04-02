import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBack = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack} style={styles.wrapper}>
      <Ionicons name="ios-chevron-back-outline" size={24} color={"black"} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
    color: "black",
  },
});
