import React from "react";
import { StyleSheet, View } from "react-native";
import { CartItem } from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem name="Model X" tagLine="Started at $5000" image={require("./assets/images/ModelX.jpeg")}/>
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
