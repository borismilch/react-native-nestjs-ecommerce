import { StyleSheet, View } from "react-native";
import React from "react";
import { StatItem } from "./";
import { Feather } from "@expo/vector-icons";
import { CommentLoader } from "components/shared/loaders";
import { GitLink } from "./StatItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface UserStatistic {
  statsUser: any;
  isLoading: boolean;
}

const Usertatistics: React.FC<UserStatistic> = (props) => {
  const { isLoading, statsUser } = props;

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <CommentLoader />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <StatItem
        Icon={<FontAwesome5 name="comment-dots" size={34} color="#06b6d4" />}
        text="Comments"
        count={statsUser._count.comments}
      />

      <StatItem
        Icon={<Feather name="shopping-bag" size={34} color="#06b6d4" />}
        text="Orders"
        count={statsUser._count.orders}
      />
      <StatItem
        Icon={<Entypo name="shop" size={34} color="#06b6d4" />}
        text="Products posted"
        count={statsUser._count.products}
      />

      <StatItem
        Icon={<AntDesign name="github" size={34} color="#06b6d4" />}
        text="My Github"
        count={(<GitLink />) as any}
      />
    </View>
  );
};

export default Usertatistics;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
