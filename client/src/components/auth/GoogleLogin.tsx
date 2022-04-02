import React from "react";
import { Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { useAuthStore } from "../../hooks";
import { useRouting } from "../../hooks";
import Toast from "react-native-toast-message/";
import { StyleSheet, View } from "react-native";

const GoogleLogin = () => {
  const { signInWithGoogle, isLoading, user } = useAuthStore();
  const { navigateTo } = useRouting();

  const singIntoGoogle = async () => {
    signInWithGoogle()
      .then(() => navigateTo("home")())
      .catch(() => {
        Toast.show({
          text1: "Signin rejected",
          text2: "Why you did that, slave?",
        });
      });
  };

  return (
    <View style={styles.wrapper}>
      <Button
        loading={isLoading}
        onPress={singIntoGoogle}
        title={"Sing in with Google"}
        icon={<FontAwesome name="google" size={24} />}
        buttonStyle={{
          backgroundColor: "#e4e4e7",
          borderWidth: 2,
          borderColor: "transparent",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          alignSelf: "center",
        }}
        titleStyle={{ marginHorizontal: 20, color: "black" }}
      />
    </View>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    position: "relative",
    borderRadius: 100,
  },
});
