import { StyleSheet, Text } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { TouchableOpacity } from "react-native";

interface ItemProps {
  item: string;
  onSelect: (val: string) => void;
  selectedOption: string;
}

const Item: React.FC<ItemProps> = (props) => {
  const { item, onSelect, selectedOption } = props;

  const onPress = () => {
    onSelect(item);
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#f8f8f8",
    justifyContent: "center",
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
});
