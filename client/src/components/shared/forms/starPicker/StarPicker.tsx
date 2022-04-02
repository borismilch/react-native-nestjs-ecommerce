import { StyleSheet, View } from "react-native";
import React from "react";
import { StarIcon } from "./";

interface StarRaitingProps {
  rait: number;
  maxNumber: number;
  onRaitChange: (num: number) => void;
}

const StarRaiting: React.FC<StarRaitingProps> = (props) => {
  const { rait = 1, maxNumber = 5, onRaitChange } = props;

  const raitStars = new Array(maxNumber).fill("").map((item, idx) => {
    if (rait - idx >= 1) {
      return (
        <StarIcon
          onPress={() => onRaitChange(idx + 1)}
          key={idx}
          variant="star"
        />
      );
    } else if (rait - (idx + 1) < 1 && rait - (idx + 1) > 0) {
      return (
        <StarIcon
          onPress={() => onRaitChange(idx + 1)}
          key={idx}
          variant="star-half-empty"
        />
      );
    } else {
      return (
        <StarIcon
          onPress={() => onRaitChange(idx + 1)}
          key={idx}
          variant="star-o"
        />
      );
    }
  });

  return <View style={styles.wrapper}>{raitStars}</View>;
};

export default StarRaiting;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  star: {
    marginRight: 5,
  },
});
