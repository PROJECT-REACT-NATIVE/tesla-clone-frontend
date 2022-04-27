import React from "react";
import {  View, Text, ImageBackground } from "react-native";
import StyleButton from "../StyleButton";
import {Styles} from "./style"
export  const CartItem = (props) => {
  const { name, image, tagLineCTA,tagLine } = props.car;
  return <>
    <View style={Styles.cardContainer}>
       <ImageBackground source={image} style={Styles.image}/>
      <View style={Styles.titles}>
        <Text style={Styles.title}>{name}</Text>
 
        <Text style={Styles.subTitle}>
        {tagLine}
        <Text style={Styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
       <View style={Styles.buttonContainer}>
         <StyleButton type="primary" content={'Existing Inventory'} onPress={()=>{
         console.warn("first" )
       }}/>
        <StyleButton type="secondary" content={'Custom order'} onPress={()=>{
         console.warn("second" )
       }}/>
       </View>
    </View>
  </>
};



