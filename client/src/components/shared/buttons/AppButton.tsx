import React from "react";
import { Button } from "react-native-elements";

interface LoginButtonProps {
  onPress?: () => void;
  text: string;
  loading?: boolean;
  width?: number;
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { onPress = () => {}, text = "", loading = false, width = 300 } = props;

  return (
    <>
      <Button
        disabledStyle={{ borderColor: "transparent" }}
        loading={loading}
        onPress={loading ? () => {} : onPress}
        title={text}
        buttonStyle={{
          backgroundColor: "#f59e0b",
          borderWidth: 2,
          borderColor: "#f59e0b",
          borderRadius: 10,
        }}
        containerStyle={{
          width,
          alignSelf: "center",
        }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </>
  );
};

export default LoginButton;
