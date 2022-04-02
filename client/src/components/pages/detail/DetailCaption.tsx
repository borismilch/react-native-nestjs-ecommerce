import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StarRaiting } from "components/shared/forms";
import { toNormalNumber } from "helpers/validators";

interface DetailCaptionProps {
  title: string;
  price: number;
  oldPrice: number;
  awgRating: number;
  raitings: number;
}

const DetailCaption: React.FC<DetailCaptionProps> = (props) => {
  const { oldPrice, price, title, awgRating, raitings } = props;

  return (
    <View style={styles.textwrapper}>
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>

      <View style={styles.raitings}>
        <StarRaiting rait={awgRating} />

        <Text> {"(" + raitings + ")"}</Text>
      </View>

      <Text style={styles.price}>
        from {"$" + price}{" "}
        {oldPrice && <Text style={styles.oldPrice}>{"$" + oldPrice}</Text>}
      </Text>
    </View>
  );
};

export default DetailCaption;

const styles = StyleSheet.create({
  textwrapper: {
    padding: 12,
  },
  price: {
    fontWeight: "bold",
    fontSize: 17,
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    fontWeight: "500",
  },

  raitings: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 19,

    fontWeight: "bold",
  },
});
