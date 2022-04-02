import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IComment } from "models";
import { Avatar } from "react-native-elements";
import { dayts } from "lib/dayts";
import { CommentActions } from ".";
import { useToggle } from "hooks";
import { useAuthStore } from "hooks";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { updatingCommentSelector } from "store/selectors/update-comment.selector";
import { UpdateCommentActions } from "store/actions";
import { StarRaiting } from "components/shared/forms/starPicker";
import { useRouting } from "hooks";

interface CommentProps {
  comment: IComment;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { comment } = props;
  const [deleted, toggleDeleted] = useToggle(false);
  const { user } = useAuthStore();
  const dispatch = useAppDispatch();
  const { updatingComment } = useAppSelector(updatingCommentSelector);
  const { navigateTo } = useRouting();

  const isOwner = user!.id === comment.owner.id;
  const isUpdating = comment.owner.id === updatingComment?.id;

  const updateCurrentComment = () => {
    dispatch(UpdateCommentActions.startUpdatingComment(comment));
  };

  if (deleted) {
    return <></>;
  }

  return (
    <View style={styles.wrapper(isUpdating)}>
      <View style={styles.userWrapper}>
        <Avatar
          onPress={navigateTo("profile", { userId: comment.userId })}
          size={34}
          rounded
          source={{ uri: comment.owner.picture }}
        />
        <Text style={styles.username}>{comment.owner.name}</Text>

        {isOwner && (
          <CommentActions
            onUpdate={updateCurrentComment}
            onDelete={toggleDeleted}
            productId={comment.id}
          />
        )}
      </View>

      <View style={styles.messageBody}>
        <Text style={styles.message}>{comment.body}</Text>
        <Text style={styles.creationDate}>
          {dayts(comment.updatedAt).fromNow()}
        </Text>
        <StarRaiting rait={comment.rait} />
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  wrapper: (isUpdating: boolean) => ({
    justifyContent: "space-between",
    padding: 8,
    margin: 5,
    borderRadius: 12,
    backgroundColor: "#fff",
    opacity: isUpdating ? 0.6 : 1,
  }),
  userWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  messageBody: {},
  username: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  message: {
    marginVertical: 6,
    fontSize: 16,
  },

  creationDate: {
    fontSize: 12,
    color: "#9ca3af",
  },
} as any);
