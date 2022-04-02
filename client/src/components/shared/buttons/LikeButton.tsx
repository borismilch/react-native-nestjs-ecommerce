import { StyleSheet } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { IconButton } from "components/shared/buttons";
import { TouchableOpacity } from "react-native";

interface LikeButtonProps {
  onPress: () => void;
  isLiked: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
  const { isLiked, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      {isLiked ? (
        <IconButton
          onPress={onPress}
          Icon={<FontAwesome name="heart" size={23} color="#dc2626" />}
        />
      ) : (
        <IconButton
          onPress={onPress}
          Icon={<Feather name="heart" size={23} color="#374151" />}
        />
      )}
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  wrapper: {
    padding: 7,
    backgroundColor: "#e4e4e7",
    borderRadius: 40,
  },
});
