import { View } from "react-native";
import React, { ReactElement } from "react";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { useState } from "react";
import { styles } from "./styles";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  marginTop: number;
  children: ReactElement<any, any>;
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const { isOpen, onClose, children, marginTop = 0 } = props;
  const [animateModal, setanimateModal] = useState(isOpen);

  return (
    <SwipeUpDownModal
      MainContainerModal={{ paddingTop: marginTop }}
      modalVisible={isOpen}
      PressToanimate={animateModal}
      ContentModal={<View style={styles.containerContent}>{children}</View>}
      HeaderStyle={{ ...styles.headerContent, marginTop }}
      ContentModalStyle={styles.Modal}
      HeaderContent={
        <View style={styles.HeaderWrapper}>
          <View style={styles.HeaderDecoration}></View>
        </View>
      }
      onClose={() => {
        setanimateModal(false);
        console.log("closed");
        onClose();
      }}
    />
  );
};

export default React.memo(ModalContainer);
