import React from "react";
import { Avatar } from "react-native-elements";
import { useAuthStore } from "hooks";
import { StyleSheet, View, Text } from "react-native";
import { AppButton } from "components/shared/buttons";

interface ChangeAvatar {
  isLoading: boolean;
  uploadFile: () => void;
  takeAPhoto: () => void;
  image: string;
}

const ChangeAvatar: React.FC<ChangeAvatar> = (props) => {
  const { isLoading, uploadFile, takeAPhoto, image } = props;

  const { user } = useAuthStore();

  return (
    <View style={styles.wrapper}>
      <Avatar
        size={120}
        rounded
        source={{ uri: image ? image : user?.picture || "" }}
      />

      <View style={styles.container}>
        <AppButton onPress={uploadFile} width={140} text="Choose image" />
        <AppButton onPress={takeAPhoto} width={140} text="Take a photo" />
      </View>
    </View>
  );
};

export default ChangeAvatar;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 290,
  },
});
