import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { IconButton } from "components/shared/buttons";

interface ImagePickerActionsProps {
  onCameraClick: () => void;
  onGalleryClick: () => void;
}

const ImagePickerActions: React.FC<ImagePickerActionsProps> = (props) => {
  const { onCameraClick, onGalleryClick } = props;

  return (
    <View style={styles.wrapper}>
      <IconButton
        Icon={
          <Ionicons
            style={styles.iconStyle}
            name="ios-camera-outline"
            size={24}
            color="black"
          />
        }
        onPress={onCameraClick}
      />
      <IconButton
        Icon={
          <FontAwesome
            style={styles.iconStyle}
            name="picture-o"
            size={24}
            color="black"
          />
        }
        onPress={onGalleryClick}
      />
    </View>
  );
};

export default ImagePickerActions;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginRight: 5,
    padding: 7,
    borderRadius: 40,
    backgroundColor: "#ccc",
  },
});
