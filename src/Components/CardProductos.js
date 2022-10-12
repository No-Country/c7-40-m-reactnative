import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';


export default function CardComercio(){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Image source={require('../assets/food.png')} style={styles.imageFood}/>
      <Card style={styles.card}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Pack Frutal</Text>
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
    marginLeft:15
  },
  imageFood:{
    marginLeft:3
  },
  card:{
    borderRadius: 20, 
    marginLeft: 5,
    backgroundColor: '#DAF4F0',
    elevation:8,
    width:'60%'
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
    justifyContent:'space-around',
    marginTop:30
  },
  ubicacion:{
    flexDirection:'row',
    marginRight:50
  },
  precio:{
    fontSize:20
  }

})