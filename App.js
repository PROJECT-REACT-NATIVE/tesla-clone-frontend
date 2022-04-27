import React from "react";
import { StyleSheet, View } from "react-native";
import { CartItem } from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem
        name="Model X"
        tagLine="order online for "
        tagLineCTA="Touchless delivery"
        image={require("./assets/images/ModelX.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
