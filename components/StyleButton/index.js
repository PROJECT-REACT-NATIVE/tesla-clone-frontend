import React from 'react'
import { View,Pressable,Text } from 'react-native'
import { Styles } from './style'

const StyleButton = (props) => {
    const {type,content,onPress} = props;
    const backgroundColor= type === 'primary'?'#171A20CC':'#FFFFFFA6'
     const textColor= type === 'primary'?'#FFFFFFA6':'#171A20CC'
  return (
    <View style={Styles.container}>
      <Pressable
      style={[Styles.button,{backgroundColor:backgroundColor}]}
       onPress = {()=>onPress()} >
      <Text style={[Styles.Text,{color:textColor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton;