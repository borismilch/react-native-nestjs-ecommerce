import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

interface ImageSlideProps {
  image: string;
  onPress: () => void;
}

const ImageSlide: React.FC<ImageSlideProps> = (props) => {
  const { image, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.imageWrapper}>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableOpacity>
  );
};

export default ImageSlide;
