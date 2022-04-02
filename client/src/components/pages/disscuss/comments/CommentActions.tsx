import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "components/shared";
import { useCommentMutations } from "hooks";

interface CommentActionsProps {
  productId: number;
  onDelete: () => void;
  onUpdate: () => void;
}

const CommentActions: React.FC<CommentActionsProps> = (props) => {
  const { productId, onDelete, onUpdate } = props;

  const { deleteCommentMutation } = useCommentMutations(productId);

  const deleteComment = () => {
    onDelete();
    deleteCommentMutation.mutate(productId);
  };

  return (
    <View style={styles.wrapper}>
      <IconButton
        style={{ marginLeft: "auto" }}
        onPress={deleteComment}
        Icon={
          <MaterialIcons
            style={styles.icon}
            name="delete"
            size={20}
            color="#6b7280"
          />
        }
      />
      <IconButton
        onPress={onUpdate}
        Icon={
          <MaterialIcons
            style={styles.icon}
            name="edit"
            size={20}
            color="#6b7280"
          />
        }
      />
    </View>
  );
};

export default CommentActions;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
  wrapper: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
  },
});
