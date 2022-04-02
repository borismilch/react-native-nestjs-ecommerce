import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import { ImageSlide, AddImageButton } from "./";

interface ImageUploaderProps {
  images: string[];
  onDeleteImage: (index: number) => void;
  onAddImage: (images: [string, string]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = (props) => {
  const { images, onDeleteImage, onAddImage } = props;
  const deleteImage = (idx: number) => () => onDeleteImage(idx);

  const imageSlides = images.map((image, idx) => (
    <ImageSlide onPress={deleteImage(idx)} key={idx} image={image} />
  ));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}
    >
      {imageSlides}

      <AddImageButton onaddImage={onAddImage} />
    </ScrollView>
  );
};

export default ImageUploader;
