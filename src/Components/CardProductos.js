import { View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';
const{width}=Dimensions.get('window');

export default function CardProductos({name, img, price, quantity, description, commerce }){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Image source={{
        uri: `${img[0].imgUrl}`
      }} style={styles.imageFood}/>
      <Card style={styles.card}>
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
    marginLeft:15,
    width:180,
    height:150,
    borderRadius:20,
  },
  card:{
    borderRadius: 20, 
    marginLeft: 5,
    marginRight:15,
    backgroundColor: '#DAF4F0',
    elevation:8,
    flex:1
  },
  containerTitle:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  title:{
    fontSize:17,
    marginTop:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  paragraph:{
    textAlign:'center',
    marginTop:15,
  },
  containerCart:{
    flexDirection:'row',
    marginTop:30
  },
  ubicacion:{
    flexDirection:'row',
    marginRight:30
  },
  precio:{
    fontSize:20
  }

})