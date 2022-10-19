import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Card, Paragraph} from 'react-native-paper';

// const {width} = Dimensions.get ('window');

export default function CardComercio({details, coment }){


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <Image source={{
          uri: `${details.logoCommerce}`,
        }}style={styles.imageFood}/>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{details.name}</Text>
          </View>
          <Text>{coment.name}</Text>
          <Paragraph style={styles.paragraph}>"{coment.details}"</Paragraph>
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
    fontSize:17,
    marginLeft:120,
    fontWeight:'bold',
  },
  paragraph:{
    textAlign:'center',
    marginTop:5,
    padding:5
  },
  corazones:{
   marginLeft:160
  }

})
