import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';

export default function CardProductos({name, img, price, quantity, description, commerce }){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Image source={{
        uri: `${img[0].imgUrl}`
      }} style={styles.imageFood}/>
      <Card style={styles.card}>
      <Image source={require('../assets/food.png')} style={styles.imageFood}/>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{name}</Text>
          <Image source={require('../assets/star.png')} />
        </View>
        <Paragraph style={styles.paragraph}>Contiene una gran cantidad de frutas de temporada.</Paragraph>
        <View style={styles.containerCart}>
            <View style={styles.ubicacion}>
              <Image source={require('../assets/ubicacion.png')}/>   
              <Text>Villa Crespo</Text>
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
    fontSize:17,
    marginLeft:140,
    fontWeight:'bold'
  },
  paragraph:{
    textAlign:'center',
    marginTop:5,
    padding:5
  },
  containerCart:{
    flexDirection:'row',
    marginTop:15
  },
  ubicacion:{
    flexDirection:'row',
    marginRight:50,
    marginLeft:85
  },
  precio:{
    fontSize:20,
  }

})