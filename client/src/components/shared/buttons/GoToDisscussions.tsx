import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "components/shared";

interface GoToDisscussionProps {
  commentsCount: number;
  onPress: () => void;
}

const GoToDusscussion: React.FC<GoToDisscussionProps> = (props) => {
  const { commentsCount, onPress } = props;
  const isNoComments = commentsCount === 0;
  const commentFhraze = isNoComments
    ? "Start new disscussion"
    : "Go to disscussion " + commentsCount;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> {commentFhraze} </Text>

      <IconButton
        onPress={onPress}
        Icon={<MaterialIcons name="chevron-right" size={30} color="black" />}
      />
    </View>
  );
};

export default GoToDusscussion;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 13,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
