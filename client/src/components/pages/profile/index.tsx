import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ProfileUserData, UserStatistics, ProfileScreenChoises } from ".";
import { useAuthStore } from "hooks";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useUserStats } from "hooks";

export const ProfileContent = () => {
  const {
    params: { userId },
  } = useRoute<RouteProp<{ params: { userId: number } }>>();
  const { user } = useAuthStore();
  const isCurrentUser = user!.id === userId;
  const { isLoading, statsUser } = useUserStats(userId);

  return (
    <View style={styles.wrapper}>
      {!isLoading && (
        <ProfileUserData
          email={statsUser.email}
          name={statsUser.name}
          picture={statsUser.picture}
        />
      )}
      <UserStatistics statsUser={statsUser} isLoading={isLoading} />
      {isCurrentUser && <ProfileScreenChoises />}
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#14b8a6",
  },
});

export { default as ProfileUserData } from "./ProfileUserData";
export { default as UserStatistics } from "./Stats";
export { default as ProfileScreenChoises } from "./ProfileScreenChoises";
export { default as StatItem } from "./StatItem";
