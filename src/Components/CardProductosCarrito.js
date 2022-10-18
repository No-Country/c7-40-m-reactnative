import { View, Text ,StyleSheet, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function CardProductosCarrito() {
  return (
    <View style={Style.containerCard}>
      <View style={Style.conteinerImage}>
      <Image style={Style.img} source={require('../assets/food.png')} />
      </View>
      <View style={Style.ConteinerDatos}>
        <Text>Los Hermanos</Text>
        <Text>Pack Frutal</Text>
        <Text>$10</Text>
      </View>
      <View style={Style.conteinerContador}>
        <Text>1</Text>
        <Button style={Style.buttonContador}>+</Button>
        <Button>-</Button>
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
    containerCard: {
        backgroundColor: '#DAF4F0',
        width: '90%',
        height: 150,
        alignItems: 'center',
        margin: 10,
        flexDirection:'row',
    },
    text:{
        fontSize: 40
    },
    conteinerContador: {
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
      width: 100,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    conteinerImage: {
      width: "40%",
      height: 100,
      overflow: 'hidden',
      justifyContent: 'center',
      resizeMode: 'stretch'
    },
    img:{
      width: "100%",
      height: 150,
    },
    ConteinerDatos:{
      flexDirection: 'column'
    },
    buttonContador:{
      fontSize: 20
    }
})