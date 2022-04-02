import { View } from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useInputValueArr } from "hooks";
import LottieView from "lottie-react-native";
import { AuthService } from "service";
import { lenghtValidator, requireValidator } from "helpers/validators";
import Toast from "react-native-toast-message";
import { styles } from "./loginStyles";
import { LoginButton, GoogleLogin } from ".";
import AuthPageNav from "./AuthPageNav";
import { Feather } from "@expo/vector-icons";
import { useKeyboardStatus } from "hooks";
import { useAuthStore } from "hooks";

const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

const LoginForm = () => {
  const [name, bindName, ___, isNameError, validateName] = useInputValueArr(
    "",
    [requireValidator, lenghtValidator(3, 23)]
  );
  const [email, bindEmail, __, isEmailError, validateEmail] = useInputValueArr(
    "",
    [requireValidator]
  );
  const [password, bindPassword, _, isPasswordError, validatePassword] =
    useInputValueArr("", [requireValidator, lenghtValidator(8, 23)]);
  const [
    confirmPassword,
    bindconfirmPassword,
    _____,
    isconfirmPasswordError,
    validateconfirmPassword,
  ] = useInputValueArr("", [requireValidator, lenghtValidator(8, 23)]);

  const [loading, setLoading] = useState<boolean>(false);
  const { isKeyboardVisible } = useKeyboardStatus();
  const { registerUser } = useAuthStore();

  const validateAll = () => {
    validateEmail();
    validatePassword();
    validateName();
    validateconfirmPassword();

    if (
      isEmailError ||
      isPasswordError ||
      isNameError ||
      isconfirmPasswordError
    ) {
      return false;
    } else {
      return true;
    }
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Passwords don't match",
        text2: "Please check validity of each",
      });

      return false;
    }

    return true;
  };

  const register = async () => {
    setLoading(true);
    const valid = validateAll();
    const samePasswords = validatePasswords();

    if (!valid || !samePasswords) {
      setLoading(false);
      return;
    }
    try {
      const payload = AuthService.createUser(name, email, password);
      console.log(payload);
      registerUser(payload);
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message,
      });
      console.log(e.message, e);
      setLoading(false);
    }
  };

  return (
    <View style={{ width: 320 }}>
      <View style={{ height: 40 }}></View>

      {!isKeyboardVisible && (
        <LottieView
          style={styles.iconStyle}
          loop
          autoPlay
          speed={0.7}
          source={require("assets/animations/97609-amazon.json")}
        />
      )}

      <Input
        style={{ ...styles.input }}
        inputContainerStyle={{
          ...styles.inputContainerStyle,
          marginTop: isKeyboardVisible ? 230 : 10,
          ...isErrorStyle(isNameError),
        }}
        {...bindName}
        placeholder="name"
        errorMessage={
          isNameError ? "name is required and must ne more than 3 symbols" : ""
        }
        rightIcon={
          <Feather
            style={isErrorStyle(isNameError)}
            name="user"
            size={24}
            color="#f59e0b"
          />
        }
        errorStyle={{ fontSize: 10 }}
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
        placeholder="password"
        rightIcon={
          <MaterialIcons
            style={isErrorStyle(isPasswordError)}
            name="lock"
            size={24}
            color="#f59e0b"
          />
        }
        errorStyle={{ fontSize: 10 }}
      />

      <Input
        style={styles.input}
        inputContainerStyle={{
          ...styles.inputContainerStyle,
          ...isErrorStyle(isconfirmPasswordError),
        }}
        {...bindconfirmPassword}
        errorMessage={
          isconfirmPasswordError
            ? "password is required must be more than 8 symbols"
            : ""
        }
        placeholder="confirm password "
        rightIcon={
          <MaterialIcons
            style={isErrorStyle(isconfirmPasswordError)}
            name="lock"
            size={24}
            color="#f59e0b"
          />
        }
      />

      <LoginButton loading={loading} onPress={register} text="Sign up" />

      <AuthPageNav
        noOr
        link="login"
        linkText="Sign in"
        text="have a account?,"
      />

      <GoogleLogin />
      <View style={{ height: 5 }}></View>
    </View>
  );
};

export default LoginForm;
