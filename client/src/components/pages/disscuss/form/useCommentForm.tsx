import React from "react";
import { useCommentMutations, useAuthStore, useInputValue } from "hooks";
import { CommentPayload } from "models";
import { useAppSelector } from "hooks/redux";
import { updatingCommentSelector } from "store/selectors/update-comment.selector";
import { useState, useEffect } from "react";

const useCommentForm = (productId: number) => {
  const { addCommentMutation, updateCommentMutation } =
    useCommentMutations(productId);
  const { user } = useAuthStore();
  const { value, changeValue, cleanValue } = useInputValue("");
  const [rait, setRait] = useState<number>(1);

  const onRaitChange = (num: number) => {
    setRait(num);
  };

  const { isUpdating, updatingComment } = useAppSelector(
    updatingCommentSelector
  );

  useEffect(() => {
    changeValue(updatingComment?.body || "");
  }, [updatingComment]);

  const onCreateComment = () => {
    if (!value) {
      return;
    }

    const commentPayload: CommentPayload = {
      body: value,
      productId,
      userId: user!.id,
      rait,
    };

    cleanValue();
    setRait(1);

    if (isUpdating) {
      updateCommentMutation.mutate([commentPayload, updatingComment!.id]);
    } else addCommentMutation.mutate(commentPayload);
  };
  return {
    rait,
    onRaitChange,
    onCreateComment,
    value,
    changeValue,
    cleanValue,
  };
};

export default useCommentForm;
