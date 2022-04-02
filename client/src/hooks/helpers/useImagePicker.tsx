import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { FileService } from "service";
import { useMutation } from "react-query";

const useImageTake = (initialImage: string = "") => {
  const [image, setImage] = useState<string>(initialImage);
  const uploadFileMutation = useMutation(
    async (formData: FormData) => {
      return await FileService.uploadFile(formData);
    },
    {
      onSuccess: () => {
        console.log("Success");
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const uploadImage = async (url: string) => {
    const formData = new FormData();

    try {
      const fileName = url.split("/").pop();

      formData.append("picture", {
        uri: url,
        name: fileName,
        type: "image/jpeg",
      } as any);
      uploadFileMutation.mutate(formData);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      return await uploadImage(result.uri);
    }
  };

  const takeAPhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      return await uploadImage(result.uri);
    }
  };

  return {
    takeAPhoto,
    uploadFile,
    image,
    photoUrl: uploadFileMutation.data ? uploadFileMutation.data : "",
    loading: uploadFileMutation.isLoading,
  };
};

export default useImageTake;
