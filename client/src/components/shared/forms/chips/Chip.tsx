import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "../../buttons";

interface ChipProps {
  onDelete: () => void;
  text: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { onDelete, text } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>

      <IconButton
        onPress={onDelete}
        Icon={
          <Ionicons
            name="close"
            style={styles.closeButton}
            size={10}
            color="black"
          />
        }
      />
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 5,
    flexDirection: "row",
    padding: 5,
    marginBottom: 7,
    paddingHorizontal: 6,
    backgroundColor: "#e4e4e7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeButton: {
    padding: 3,
    borderRadius: 20,
    backgroundColor: "#d4d4d8",
  },

  text: {
    marginRight: 5,
  },
});
