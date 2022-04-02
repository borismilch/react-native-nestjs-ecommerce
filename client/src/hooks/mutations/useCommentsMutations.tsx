import React from "react";
import { CommentService } from "service";
import { useMutation, useQueryClient } from "react-query";
import { CommentPayload } from "models";
import { queryNames } from "constants/queryNames";

const useCommentsMutations = (productId: number) => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    console.log("valid");
    queryClient.invalidateQueries(queryNames.comments + productId);
    queryClient.invalidateQueries("currentProduct" + productId);
  };

  const addCommentMutation = useMutation(
    async (payload: CommentPayload) => {
      return await CommentService.addComment(payload);
    },
    { onSuccess }
  );

  const updateCommentMutation = useMutation(
    async (data: [CommentPayload, number]) => {
      return await CommentService.updateComment(data[0], data[1]);
    },
    { onSuccess }
  );

  const deleteCommentMutation = useMutation(
    async (id: number) => {
      return await CommentService.deleteComment(id);
    },
    { onSuccess }
  );

  return { deleteCommentMutation, updateCommentMutation, addCommentMutation };
};

export default useCommentsMutations;
