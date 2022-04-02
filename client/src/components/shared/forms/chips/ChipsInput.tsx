import { StyleSheet, View, TextInput, Pressable } from "react-native";
import React, { useRef } from "react";
import { default as Chip } from "./Chip";
import { useInputValue } from "hooks";

interface ChipsInputProps {
  chips: string[];
  onChipAdd: (val: string) => void;
  onChipDelete: (index: number) => void;
}

const ChipsInput: React.FC<ChipsInputProps> = (props) => {
  const { chips, onChipAdd, onChipDelete } = props;
  const { value, changeValue, cleanValue } = useInputValue("");

  const inputRef = useRef<TextInput>(null);

  const addNewChip = () => {
    if (value) {
      cleanValue();
      onChipAdd(value);
    }
  };

  const triggerInput = () => {
    inputRef.current?.focus();
  };

  const chipsComponents = chips.map((item, idx) => (
    <Chip text={item} key={idx} onDelete={() => onChipDelete(idx)} />
  ));

  return (
    <Pressable onPress={triggerInput} style={styles.wrapper}>
      {chipsComponents}
      <TextInput
        ref={inputRef}
        value={value}
        placeholder={"Enter options..."}
        onChangeText={changeValue}
        onSubmitEditing={addNewChip}
      />
    </Pressable>
  );
};

export default ChipsInput;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 6,
    marginHorizontal: 10,
    borderBottomWidth: 1,
  },
});
