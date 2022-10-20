import { View, Text, Image, StyleSheet,TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import {Button, Card, Paragraph} from 'react-native-paper';
import axios from 'axios';

export default function CardProductos({token,id,name, img, price, description, commerce }){

  // console.log(token)
  const [quan, setQuantity] = useState(1)

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