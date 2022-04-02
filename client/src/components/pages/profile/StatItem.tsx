import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { ReactElement } from "react";

interface StaticticItemProps {
  Icon: ReactElement<any, any>;
  text: string;
  count: number;
}

const StaitsticItem: React.FC<StaticticItemProps> = (props) => {
  const { Icon, text, count } = props;

  return (
    <TouchableOpacity style={styles.wrapper}>
      {Icon}

      <Text style={styles.subtitle}>{text}</Text>

      <Text style={styles.count}>{count}</Text>
    </TouchableOpacity>
  );
};

export default StaitsticItem;

export const GitLink = () => {
  const openLink = async () => {
    await Linking.openURL("https://github.com/UkrainiAnt");
  };
  return (
    <TouchableOpacity>
      <Text style={styles.count}>Link</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: "#14b8a6",
    borderRadius: 18,
    padding: 12,
    width: "46.5%",
    height: "40%",
    marginRight: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  subtitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#6b7280",
    marginTop: 5,
  },

  count: {
    fontWeight: "bold",
    color: "#14b8a6",
    fontSize: 26,
  },
});
