import React from "react";
import {  View, Text, ImageBackground } from "react-native";
import {Styles} from "./style"
export  const CartItem = () => {
  return <>
    <View style={Styles.cardContainer}>
       <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={Styles.image}/>
      <View style={Styles.titles}>
        <Text style={Styles.title}>Model x</Text>

        <Text style={Styles.subTitle}>Say starting as 1000$</Text>
      </View>
    </View>
  </>
};



