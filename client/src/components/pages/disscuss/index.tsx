import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useDisscussionComments } from "hooks";
import { Comment } from "components/pages/disscuss/comments";
import { CommentLoader } from "components/shared/loaders";
import { ScrollView } from "react-native-gesture-handler";
import { AddCommentForm, NoCommentPlacehoder } from "./";

export const DisscussContent = () => {
  const { comments, isLoading, productId } = useDisscussionComments();

  const commentComponentArray = comments
    ?.reverse()
    ?.map((comment) => <Comment key={comment.id} comment={comment} />);

  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading && <CommentLoader />}

      {!isLoading && comments && comments?.length === 0 && (
        <NoCommentPlacehoder />
      )}
      <ScrollView style={styles.container}>{commentComponentArray}</ScrollView>

      <AddCommentForm productId={productId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 60,
  },
  container: {
    flex: 1,
  },
});

export { default as AddCommentForm } from "./form/AddCommentForm";
export { default as NoCommentPlacehoder } from "./NoCommentPlacehoder";
