import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StarIcon } from "./";

interface StarRaitingProps {
  votes?: number;
  rait: number;
}

const StarRaiting: React.FC<StarRaitingProps> = (props) => {
  const { votes = 0, rait = 0 } = props;
  const isDecimal = Math.floor(rait) != rait;

  const raitStart = new Array(
    Math.floor(isDecimal && Math.floor(rait) > 1 ? rait - 1 : rait)
  )
    .fill("")
    .map((item, idx) => <StarIcon key={idx} variant="star" />);

  const disrateStars = new Array(Math.floor(5 - rait))
    .fill("")
    .map((item, idx) => <StarIcon key={idx} variant="star-o" />);

  return (
    <View style={styles.wrapper}>
      {raitStart}

      {isDecimal && <StarIcon variant="star-half-empty" />}

      {disrateStars}

      <Text>{"(" + rait.toFixed(1) + ")"}</Text>
    </View>
  );
};

export default StarRaiting;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
});
