import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthStore } from "hooks";
import { Avatar } from "react-native-elements";
import { Dimensions } from "react-native";

interface ProfileContentProps {
  name: string;
  picture: string;
  email: string;
}

const ProfileContent: React.FC<ProfileContentProps> = (props) => {
  const { email, name, picture } = props;

  return (
    <View style={styles.wrapper}>
      <Avatar
        rounded
        title="dksdsl"
        avatarStyle={styles.avatar}
        source={{ uri: picture }}
        size={100}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.username}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default React.memo(ProfileContent);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: Dimensions.get("window").height / 2.7,
  },

  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  username: {
    fontSize: 22,
    marginTop: 6,
    marginBottom: 3,
    color: "white",
    fontWeight: "bold",
  },

  email: {
    fontSize: 16,
    color: "#f1f1f1",
  },

  avatar: {
    alignSelf: "center",
    borderRadius: 50,
  },
});
