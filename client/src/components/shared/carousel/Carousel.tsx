import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { CarouselSlide, ThrumbnailsGallery } from "./";
import { useRef } from "react";
import { useState } from "react";

interface CarouselProps {
  images: string[];
  maxHeight: number;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  let carouselRef = useRef<FlatList<string>>(null);
  const { images, maxHeight } = props;

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const selectImage = () => {};

  const onCurrentSlideChange = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentSlide(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <>
      <FlatList
        style={{ maxHeight }}
        data={images}
        renderItem={({ item }) => <CarouselSlide image={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={carouselRef}
        onViewableItemsChanged={onCurrentSlideChange}
      />
      <ThrumbnailsGallery
        currentIndex={currentSlide}
        selectImage={selectImage}
        images={images}
      />
    </>
  );
};

export default Carousel;
