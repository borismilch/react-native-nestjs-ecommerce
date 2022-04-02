import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { LikeService } from "service";
import { useAuthStore } from "hooks";
import { queryNames } from "constants/.";

const useLikeMutations = (productId: number) => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const likeMutation = useMutation(
    async (data: [number, boolean, number]) => {
      return await LikeService.likeProduct(
        {
          productId: data[0],
          userId: user!.id,
        },
        data[1],
        data[2]
      );
    },
    {
      onSuccess: () => {
        console.log("liked");
        queryClient.invalidateQueries(queryNames.productLikes + productId);
        queryClient.invalidateQueries(queryNames.userLikes);
      },

      onError: (e) => {
        console.log(e);
      },
    }
  );
  return { likeMutation };
};

export default useLikeMutations;
