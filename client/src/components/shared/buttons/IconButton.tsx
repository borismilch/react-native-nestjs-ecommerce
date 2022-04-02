import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { ReactElement } from "react";
import { Button } from "react-native-elements";

interface IconButtonProps {
  Icon: ReactElement<any, any>;
  onPress?: () => void;
  style?: ViewStyle;
  isButton?: boolean;
  isRounded?: boolean;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    Icon,
    onPress,
    style = {},
    isButton = false,
    isRounded = false,
  } = props;

  if (isButton) {
    return (
      <Button
        type="outline"
        icon={Icon}
        onPress={onPress ? onPress : () => {}}
        buttonStyle={{ ...style, borderRadius: isRounded ? 50 : 0 }}
      />
    );
  }

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
};

export default IconButton;
