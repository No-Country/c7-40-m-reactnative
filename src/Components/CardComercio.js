import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';


// const {width} = Dimensions.get ('window');

export default function CardComercio({details, coment }){


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{details.name}</Text>
        </View>
      <Image source={{
          uri: `${details.logoCommerce}`,
        }}style={styles.imageFood}/>
          <Text style={styles.name}>{coment.name}</Text>
          <Paragraph style={styles.paragraph}>"{coment.details}"</Paragraph>
        <View style={styles.containerCorazones}>
          <Image source={require('../assets/corazones.png')}/> 
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
    borderRadius:20
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
    marginTop:10,
    fontFamily:'poppins-bold'
  },
  name:{
    textAlign:'center',
    fontSize:15,
    fontFamily:'poppins-bold'
  },
  paragraph:{
    textAlign:'center',
    padding:10,
    fontFamily:'poppins-italic'
  },
  containerCorazones:{
    alignItems:'center',
    marginBottom:5
  }

})
