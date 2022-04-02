import React from "react";
import { useCommentMutations, useAuthStore, useInputValue } from "hooks";
import { CommentPayload } from "models";
import { useAppSelector } from "hooks/redux";
import { updatingCommentSelector } from "store/selectors/update-comment.selector";
import { useState, useEffect } from "react";
import { useAppDispatch } from "hooks/redux";
import { UpdateCommentActions } from "store/actions";
import { useRef } from "react";
import { TextInput } from "react-native-gesture-handler";

const useCommentForm = (productId: number) => {
  const { addCommentMutation, updateCommentMutation } =
    useCommentMutations(productId);
  const { user } = useAuthStore();
  const { value, changeValue, cleanValue } = useInputValue("");
  const [rait, setRait] = useState<number>(1);

  const inputRef = useRef<TextInput>(null);

  const onRaitChange = (num: number) => {
    setRait(num);
  };

  const dispatch = useAppDispatch();

  const { isUpdating, updatingComment } = useAppSelector(
    updatingCommentSelector
  );

  useEffect(() => {
    changeValue(updatingComment?.body || "");
    inputRef.current?.focus();
  }, [updatingComment]);

  const onCreateComment = () => {
    if (!value) {
      return;
    }

    const commentPayload: CommentPayload = {
      body: value,
      productId,
      userId: user?.id || 1,
      rait,
    };

    cleanValue();
    setRait(1);

    if (isUpdating) {
      updateCommentMutation.mutate([commentPayload, updatingComment!.id]);
      dispatch(UpdateCommentActions.endUpdatingComent());
    } else addCommentMutation.mutate(commentPayload);
  };
  return {
    rait,
    onRaitChange,
    onCreateComment,
    value,
    changeValue,
    cleanValue,
    inputRef,
  };
};

export default useCommentForm;
