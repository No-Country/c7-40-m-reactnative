import { View, Text, Image, StyleSheet,TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import {Button, Card, Paragraph} from 'react-native-paper';
import axios from 'axios';

export default function CardProductos({token,id,name, img, price, description, commerce }){

  // console.log(token)
  const [quan, setQuantity] = useState(0)

  const plasProduct = () => {
    setQuantity(quan+1)
  }

//   const config =(token)=> {
//     return{
//       headers: { Authorization: `Bearer ${token}` }
//     }
// };


  const dispatchProduct ={
    productId: id,
    quantity: quan
  }
  const AddProduct = () => {
    console.log("TOKEN", token)
    axios.post('https://tester-server-production.up.railway.app/api/v1/cart/add-product/', dispatchProduct, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    } )
    .then(res=>{
      console.log(res)
      alert('su producto se agrego')
    })
    .catch(error=>{
      console.log("error addProduct", error.message)
    })
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <Text></Text>
      <Text style={styles.title}>{commerce.name}</Text>
      <Image source={{
        uri: `${img[0].imgUrl}`
      }} style={styles.imageFood}/>
      {/* <Image source={require('../assets/food.png')} style={styles.imageFood}/> */}
        <View style={styles.containerTitle}>
          <Text>{name}</Text>
          {/* <Image source={require('../assets/star.png')} /> */}
        </View>
        <Paragraph style={styles.paragraph}>{description}</Paragraph>
        <View style={styles.containerCart}>
            <View style={styles.ubicacion}>
              <Image source={require('../assets/ubicacion.png')}/>   
              <Text>{commerce.address}</Text>
            </View>
            <Text style={styles.precio}>{price}</Text>
            <TouchableHighlight
              onPress={AddProduct}>
              <Image source={require('../assets/cart.png')}/> 
            </TouchableHighlight>
            <Button onPress={plasProduct} >+</Button>
            <Text>{quan}</Text>
            {/* <Image source={require('../assets/cart.png')}/>  */}
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