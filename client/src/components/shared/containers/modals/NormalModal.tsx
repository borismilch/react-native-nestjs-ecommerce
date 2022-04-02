import { Pressable, View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface NormalModalContentProps {
  onClose: () => void;
}

const NormalModalContent: React.FC<NormalModalContentProps> = (props) => {
  const { onClose, children } = props;
  return (
    <Pressable onPress={onClose} style={styles.backbrop}>
      <View style={[styles.Modal]}>{children}</View>
    </Pressable>
  );
};

export default NormalModalContent;
