import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { LikeButton } from "components/shared/buttons";
import { useLikesMutations, useProductLikes } from "hooks";
import { useAuthStore } from "hooks";

interface LikesSectionProps {
  productId: number;
}

const LikesSection: React.FC<LikesSectionProps> = (props) => {
  const { productId } = props;
  const { likeMutation } = useLikesMutations(productId);
  const { data } = useProductLikes(productId);

  const { user } = useAuthStore();
  const liked = data?.data.find(
    (item) => (item.productId === productId && item.userId === user?.id) || 1
  );

  useEffect(() => {
    console.log(liked, productId, user?.id || 1);
  }, [liked]);

  const onLikeStateChange = () => (e: any) => {
    console.log("liked on " + productId);
    likeMutation.mutate([productId, !!liked, liked?.id || 0]);
  };

  return (
    <View style={styles.absoluteButtonWrapper}>
      <LikeButton onPress={onLikeStateChange() as any} isLiked={!!liked} />
    </View>
  );
};

export default React.memo(LikesSection);

const styles = StyleSheet.create({
  absoluteButtonWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
