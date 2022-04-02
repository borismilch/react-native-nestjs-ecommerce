import { StyleSheet, Image, useWindowDimensions, View } from "react-native";
import React from "react";

interface CarouselSlideProps {
  image: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = (props) => {
  const { image } = props;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.wrapper}>
      <Image style={{ width, height: "100%" }} source={{ uri: image }} />
    </View>
  );
};

export default React.memo(CarouselSlide);

const styles = StyleSheet.create({
  wrapper: {},
});
