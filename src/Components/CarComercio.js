import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph, Title} from 'react-native-paper';


export default function CardComercio(){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <View style={styles.container}>
      <Image source={require('../assets/food.png')} />
      <Card style={styles.card}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>La cocina de Toto</Text>
          {/* <Card.Title title="La cocina de Toto"/> */}
          <Image source={require('../assets/star.png')} />
        </View>
        <Paragraph style={styles.paragraph}>“ La gente súper servicial y atenta pero hay muy poco surtido en bebidas y otros. “</Paragraph>
        <Image source={require('../assets/corazones.png')} style={styles.corazones}/>        
      </Card>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: '70%', 
    marginBottom: 20
  },
  card:{
    borderRadius: 20, 
    marginLeft: 10,
    backgroundColor: '#DAF4F0',
    elevation:8,
  
  },
  paragraph:{
    textAlign:'center',
    marginTop:15
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
  corazones:{
    marginLeft:210,
    marginTop:25
  }
  

})
