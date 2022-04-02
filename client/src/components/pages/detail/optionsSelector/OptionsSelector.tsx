import { ScrollView } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import { useOptionSelector } from "./";
import Item from "./Item";
import { ModalContainer } from "components/shared/containers";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import OptionSelectorWrapper from "./OptionWrapper";

interface OptionSelectorProps {
  options: string[];
  image: string;
}

const OptionsSelector: React.FC<OptionSelectorProps> = (props) => {
  const { options, image } = props;
  const { inputRef, isVisible, onClose, onOpen, onSelect, selectedOption } =
    useOptionSelector(options);

  const optionItems = options.map((item, idx) => (
    <Item
      selectedOption={selectedOption}
      item={item}
      key={idx}
      onSelect={onSelect}
    />
  ));

  return (
    <>
      <OptionSelectorWrapper onPress={onOpen} image={image}>
        <Input
          showSoftInputOnFocus={false}
          value={selectedOption}
          inputContainerStyle={styles.inputContainerStyle}
          ref={inputRef}
          labelStyle={{ display: "none" }}
          errorStyle={{ display: "none" }}
          onFocus={onOpen}
          rightIcon={
            <MaterialIcons size={30} color={"#0f172a"} name="arrow-drop-down" />
          }
        />
      </OptionSelectorWrapper>

      <ModalContainer isOpen={isVisible} marginTop={470} onClose={onClose}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {optionItems}
        </ScrollView>
      </ModalContainer>
    </>
  );
};

export default OptionsSelector;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "transparent",
  },
  inputContainerStyle: {
    borderColor: "transparent",
    marginLeft: 40,
  },
});
