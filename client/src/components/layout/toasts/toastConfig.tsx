import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from "react-native-toast-message";
import React from "react";

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),

  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 13,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  ),
};
