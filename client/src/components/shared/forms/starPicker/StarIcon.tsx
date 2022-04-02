import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface StarIconProps {
  variant: string;
  onPress?: () => void;
}

const StarIcon: React.FC<StarIconProps> = (props) => {
  const { variant, onPress = () => {} } = props;
  return (
    <FontAwesome
      onPress={onPress}
      name={variant as any}
      style={styles.star}
      size={18}
      color="#e47911"
    />
  );
};

export default StarIcon;

const styles = StyleSheet.create({
  star: {
    marginRight: 5,
  },
});
