import { StyleSheet, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useImagePicker } from "hooks";
import { ImagePickerActions } from ".";
import { useAppDispatch } from "hooks/redux";
import { useKeyboardStatus } from "hooks";
import { CreateProducerActions } from "store/actions";

const imagePlaceholder =
  "https://blueskystrategies.org/wp-content/uploads/2015/01/default-placeholder-1024x1024-570x760.png";

const ProductImage: React.FC = () => {
  const { image, loading, photoUrl, takeAPhoto, uploadFile } =
    useImagePicker(imagePlaceholder);

  const dispatch = useAppDispatch();
  const { isKeyboardVisible } = useKeyboardStatus();

  useEffect(() => {
    dispatch(CreateProducerActions.changeImage(photoUrl));
  }, [photoUrl]);

  return (
    <View style={styles.wrapper(isKeyboardVisible)}>
      <View style={styles.absoluteWrapper}>
        <ImagePickerActions
          onCameraClick={takeAPhoto}
          onGalleryClick={uploadFile}
        />
      </View>

      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 365,
  },
  wrapper: (isKeyboardVisible: boolean) => ({
    width: "100%",
    height: isKeyboardVisible ? 140 : 330,
    position: "relative",
  }),

  absoluteWrapper: {
    position: "absolute",
    top: 30,
    zIndex: 30,
    right: 10,
  },
} as any);
