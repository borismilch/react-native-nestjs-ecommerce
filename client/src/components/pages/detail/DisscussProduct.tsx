import React from "react";
import { GoToDisscussion } from "components/shared/buttons";
import { useRouting } from "hooks";

interface DisscussProductProps {
  commentsCount: number;
  productId: number;
}

const DisscussProduct: React.FC<DisscussProductProps> = (props) => {
  const { commentsCount, productId } = props;
  const { navigation } = useRouting();

  const navigateToComments = () => {
    navigation.navigate("disscuss" as never, { productId } as never);
  };

  return (
    <GoToDisscussion
      onPress={navigateToComments}
      commentsCount={commentsCount}
    />
  );
};

export default React.memo(DisscussProduct);
