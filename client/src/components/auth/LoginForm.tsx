import { View } from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useInputValueArr } from "../../hooks";
import LottieView from "lottie-react-native";
import { lenghtValidator, requireValidator } from "../../helpers/validators";
import Toast from "react-native-toast-message";
import { styles } from "./loginStyles";
import { LoginButton, GoogleLogin } from ".";
import AuthPageNav from "./AuthPageNav";
import { useAuthStore } from "hooks";
import { PageLoader } from "components/shared/loaders";

export const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

const LoginForm = () => {
  const [email, bindEmail, __, isEmailError, validateEmail] = useInputValueArr(
    "",
    [requireValidator]
  );
  const [password, bindPassword, _, isPasswordError, validatePassword] =
    useInputValueArr("", [requireValidator, lenghtValidator(8, 23)]);
  const [loading, setLoading] = useState<boolean>(false);

  const { loginUser, isLoading } = useAuthStore();

  if (isLoading) {
    return <PageLoader />;
  }

  const validateAll = () => {
    validateEmail();
    validatePassword();

    if (isEmailError || isPasswordError) {
      return false;
    } else {
      return true;
    }
  };

  const login = async () => {
    setLoading(true);
    const valid = validateAll();

    if (!valid) {
      setLoading(false);
      return;
    }
    try {
      loginUser(email, password);
    } catch (e: any) {
      console.log(e.message, e);
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message,
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <LottieView
        style={styles.iconStyle}
        loop={false}
        autoPlay
        speed={0.7}
        source={require("assets/animations/97609-amazon.json")}
      />

      <Input
        style={styles.input}
        inputContainerStyle={{
          ...styles.inputContainerStyle,
          ...isErrorStyle(isEmailError),
        }}
        {...bindEmail}
        placeholder="email"
        errorMessage={isEmailError ? "email is required" : ""}
        rightIcon={
          <Ionicons
            style={isErrorStyle(isEmailError)}
            name="mail"
            color={"#f59e0b"}
            size={24}
          />
        }
        errorStyle={{ fontSize: 10 }}
      />

      <Input
        style={styles.input}
        inputContainerStyle={{
          ...styles.inputContainerStyle,
          ...isErrorStyle(isPasswordError),
        }}
        {...bindPassword}
        errorMessage={
          isPasswordError
            ? "password is required must be more than 8 symbols"
            : ""
        }
        placeholder="password "
        rightIcon={
          <MaterialIcons
            style={isErrorStyle(isPasswordError)}
            name="lock"
            size={24}
            color="#f59e0b"
          />
        }
      />

      <LoginButton loading={loading} onPress={login} text="Login" />

      <AuthPageNav
        link="register"
        linkText="Sign Up"
        text="do not have a account?,"
      />

      <GoogleLogin />
    </View>
  );
};

export default LoginForm;
