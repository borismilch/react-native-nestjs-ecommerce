import React from "react";
import { ImageListUploader } from "components/shared/forms";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { allSelector } from "store/selectors/create-product.slice";
import { CreateProducerActions } from "store/actions";

const FormImagesUploader = () => {
  const dispatch = useAppDispatch();
  const { templateImages } = useAppSelector(allSelector);

  const onAddImage = (images: [string, string]) => {
    dispatch(CreateProducerActions.addImage(images));
  };

  const onDeleteImage = (index: number) => {
    dispatch(CreateProducerActions.removeImage(index));
  };

  return (
    <ImageListUploader
      onAddImage={onAddImage}
      onDeleteImage={onDeleteImage}
      images={templateImages}
    />
  );
};

export default FormImagesUploader;
