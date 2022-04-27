import React from 'react';
import { View, Text,FlatList,Dimensions } from 'react-native';
import cars from './cars';
import { CartItem } from '../CarItem';
import { Styles } from './styles';
 
export default function CartList() {
  return (
    <View style={Styles.container}>
     <FlatList
      data={cars}
      key={Math.random()}
      renderItem={({item})=><CartItem  key={Math.random()} car={item}/>}
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />
     </View>
  );
}
