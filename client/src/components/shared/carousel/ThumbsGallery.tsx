import { StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

interface ThumbnailsGalleryProps {
  images: string[];
  selectImage: () => void;
  currentIndex: number;
}

const ThumbsGallery: React.FC<ThumbnailsGalleryProps> = (props) => {
  const { images, selectImage, currentIndex } = props;

  const imageItems = images.map((image, idx) => (
    <TouchableOpacity
      key={idx}
      style={[
        styles.imageWrapper,
        {
          borderWidth: 3,
          borderColor: idx === currentIndex ? "#f59e0b" : "transparent",
        },
      ]}
    >
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableOpacity>
  ));

  return (
    <ScrollView
      horizontal
      centerContent
      style={styles.wrapper}
      showsHorizontalScrollIndicator={false}
    >
      {imageItems}
    </ScrollView>
  );
};

export default ThumbsGallery;

const styles = StyleSheet.create({
  wrapper: {
    padding: 6,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f1f1f1",
  },
  imageWrapper: {
    height: 40,
    width: 40,
    borderRadius: 7,
    position: "relative",
    overflow: "hidden",
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
