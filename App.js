import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CartItem } from "./components/CarItem";
import CartList from "./components/cartList";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
     <CartList/>
     <StatusBar style="auto" />
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
