import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { ITabItem } from "models/";
import { useRouting } from "hooks";
import { useAuthStore } from "hooks";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SingleTapProps {
  tab: ITabItem;
}

const SingleTab: React.FC<SingleTapProps> = (props) => {
  const { user } = useAuthStore();
  const { tab } = props;
  const { route, navigateTo } = useRouting();
  const isActive = route.name === tab.to;

  return (
    <TouchableOpacity onPress={navigateTo(tab.to, { userId: user!.id })}>
      <View style={styles.wrapper(isActive)}>
        {isActive && <View style={style.badge} />}

        <tab.iconSet
          name={tab.Icon}
          size={26}
          color={isActive ? "#0284c7" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SingleTab;

const styles = StyleSheet.create({
  wrapper: (isActive: boolean): ViewStyle => ({
    alignItems: "center",
    justifyContent: "center",
    height: 29,
    padding: 0,
    opacity: isActive ? 1 : 0.5,
  }),
} as any);

const style = StyleSheet.create({
  badge: {
    width: 45,
    height: 7,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#0284c7",
  },
});
