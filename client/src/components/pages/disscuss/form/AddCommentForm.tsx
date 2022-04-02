import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IconButton } from "components/shared/buttons";
import { TextInput } from "react-native";
import { useCommentForm } from ".";
import { StarPicker } from "components/shared/forms/starPicker";

interface AddCommentFormProps {
  productId: number;
}

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
  const { productId } = props;

  const { onCreateComment, onRaitChange, rait, changeValue, value } =
    useCommentForm(productId);

  return (
    <>
      <View style={styles.starWrapper}>
        <StarPicker maxNumber={5} onRaitChange={onRaitChange} rait={rait} />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          value={value}
          onChangeText={changeValue}
          placeholder="Enter comment..."
          style={styles.input}
        />
        <IconButton
          onPress={onCreateComment}
          Icon={
            <FontAwesome
              style={styles.IconButton}
              name="send"
              size={22}
              color="#06b6d4"
            />
          }
        />
      </View>
    </>
  );
};

export default React.memo(AddCommentForm);

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  starWrapper: {
    padding: 12,
    borderTopWidth: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#d1d5db",
  },

  input: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    paddingHorizontal: 13,
    color: "#4b5563",
  },
  IconButton: {
    padding: 10,
    marginLeft: 6,
    borderRadius: 40,
    backgroundColor: "white",
  },
});
