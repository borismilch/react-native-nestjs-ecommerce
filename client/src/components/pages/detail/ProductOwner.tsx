import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IUser } from "models";
import { Avatar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouting } from "hooks";

interface ProductOwnerProps {
  owner: IUser;
}

const ProductOwner: React.FC<ProductOwnerProps> = (props) => {
  const { owner } = props;
  const { navigateTo } = useRouting();

  return (
    <TouchableOpacity
      onPress={navigateTo("profile", { userId: owner.id })}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <Avatar size={40} rounded source={{ uri: owner.picture }} />

        <View style={{ marginLeft: 7 }}>
          <Text style={styles.name}>{owner.name}</Text>
          <Text style={styles.email}>{owner.email}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={{ marginRight: 5 }}>View profile</Text>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductOwner;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontStyle: "italic",
    color: "#323232",
  },
});
