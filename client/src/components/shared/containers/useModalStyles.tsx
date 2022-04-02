import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: "relative",
    width: "110%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  modalCheckoutContainer: {
    backgroundColor: "#fff",
    padding: 16,
    height: 450,
    width: "100%",
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonText: {
    marginTop: 20,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },

  text: {
    position: "absolute",
    right: 20,
    color: "white",
    fontSize: 15,
    top: 14,
    fontWeight: "bold",
    opacity: 0.8,
  },
});
