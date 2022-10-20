import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';

export default function CardProductos({name, img, price, quantity, description, commerce }){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{name}</Text>
        </View>
      <Image source={require('../assets/food.png')} style={styles.imageFood}/>
        <Paragraph style={styles.paragraph}>Contiene una gran cantidad de frutas de temporada.</Paragraph>
        <View style={styles.containerCart}>
            <View style={styles.ubicacion}>
              <Image source={require('../assets/ubicacion.png')}/>   
              <Text style={styles.textUbicacion}>Villa Crespo</Text>
            </View>
            <Text style={styles.precio}>$10</Text>
            <Image source={require('../assets/cart.png')}/> 
        </View>     
      </Card>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageFood:{
    margin:10,
    width:'auto',
    height:150,
    borderRadius:20,
  },
  card:{
    borderRadius: 20, 
    marginLeft: 15,
    marginRight:15,
    backgroundColor: '#DAF4F0',
    elevation:8,
    flex:1
  },
  title:{
    fontSize:20,
    textAlign:'center',
    marginTop:5,
    fontFamily:'poppins-bold'
  },
  paragraph:{
    textAlign:'center',
    padding:10,
    fontFamily:'poppins-italic'
  },
  containerCart:{
    flexDirection:'row',
    marginTop:15
  },
  ubicacion:{
    flexDirection:'row',
    marginRight:50,
    marginLeft:85,
  },
  textUbicacion:{
    fontFamily:'poppins-light'
  },
  precio:{
    fontSize:20,
    marginBottom:10,
    fontFamily:'poppins-light'
  }

})