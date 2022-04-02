import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useImagePicker } from "hooks";
import { useEffect } from "react";

interface AddImageButtonProps {
  onaddImage: (images: [string, string]) => void;
}

const AddImageButton: React.FC<AddImageButtonProps> = (props) => {
  const { onaddImage } = props;
  const { uploadFile, photoUrl, image } = useImagePicker();

  useEffect(() => {
    if (photoUrl) {
      onaddImage([photoUrl, image]);
    }
  }, [photoUrl]);

  return (
    <TouchableOpacity style={styles.addButton} onPress={uploadFile}>
      <Ionicons name="add" size={20} color="#4b5563" />
    </TouchableOpacity>
  );
};

export default AddImageButton;
