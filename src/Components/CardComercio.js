import { View, Text, Image, StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';

const {width} = Dimensions.get ('window');

export default function CardComercio(){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Image source={require('../assets/food.png')} style={styles.imageFood}/>
      <Card style={styles.card}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>La cocina de Toto</Text>
          <Image source={require('../assets/star.png')} />
        </View>
        <Paragraph style={styles.paragraph}>“La gente súper servicial y atenta pero hay muy poco surtido en bebidas y otros. “</Paragraph>
        <Image source={require('../assets/corazones.png')} style={styles.corazones}/>        
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
    borderRadius:20
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
    marginTop:15
  },
  corazones:{
    marginLeft:120,
    marginTop:25
  }

})
