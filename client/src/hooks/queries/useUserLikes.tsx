import React from "react";
import { useQuery } from "react-query";
import { LikeService } from "service";
import { queryNames } from "constants/.";
import { useAuthStore } from "hooks";

const useProductLikes = () => {
  const { user } = useAuthStore();

  const { data, isLoading, isFetching } = useQuery(
    queryNames.userLikes,
    async () => {
      return LikeService.getUsersLikes(user!.id);
    }
  );
  return { likes: data?.data || [], isLoading: isLoading || isFetching };
};

export default useProductLikes;
