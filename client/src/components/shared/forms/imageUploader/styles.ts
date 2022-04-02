import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    padding: 6,
    marginTop: 10,
    marginHorizontal: 7,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#525252",
  },
  addButton: {
    height: 40,
    width: 40,
    borderRadius: 7,
    position: "relative",
    backgroundColor: "#f1f1f1",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  imageWrapper: {
    position: "relative",
    height: 40,
    width: 40,
    borderRadius: 6,
    marginRight: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
