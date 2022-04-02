import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerContent: { flex: 1, marginTop: 40 },

  headerContent: {
    marginTop: 0,
  },
  Modal: {
    backgroundColor: "#fff",
    marginTop: 0,

    borderTopEndRadius: 40,
    overflow: "hidden",
    borderTopStartRadius: 40,
  },

  HeaderWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 17,
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1,
  },

  HeaderDecoration: {
    borderRadius: 20,
    width: 60,
    height: 6,
    backgroundColor: "#a3a3a3",
  },

  backbrop: {
    flex: 1,
  },
});
