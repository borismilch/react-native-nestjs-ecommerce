import React from "react";
import { useQuery } from "react-query";
import { queryNames } from "constants/.";
import { UserService } from "service";

const useUserStats = (userId?: number) => {
  const { data, isLoading, isFetching, refetch } = useQuery(
    queryNames.userStats,
    async () => {
      return UserService.getUserStats(userId!);
    }
  );

  return { statsUser: data?.data, isLoading: isLoading || isFetching };
};

export default useUserStats;
