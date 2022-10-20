import { View, Text ,StyleSheet, Image, Button,TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CardProductosCarrito({id, name, commerce, price, description, quantity, token, navigation}) {
  console.log(token)
  const [count , setCount] = useState(quantity)
  
  const dispatchPath = () =>{

    axios.patch('https://tester-server-production.up.railway.app/api/v1/cart/update-cart', {
      productId: id,
      quantity: count
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    } ).then(res=> {
      console.log('ok')
    }).catch(error=>{
      console.log(error)
    })
  } 

  const AddProducts = () => {
    setCount(count+1)
    dispatchPath()
  }
  const SubtractProducts = ()=> {
    setCount(count-1)
    dispatchPath()
  }

  const DeleteProduct = () => {
    const productId = id

    axios.delete(`https://tester-server-production.up.railway.app/api/v1/cart/${productId}`, 
    { headers: { 
      'Authorization': `Bearer ${token}`
    }})
    .then((res) => {
      alert(`Su producto ${name} fue eliminado`)
      navigation.push("Productos")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <View >
        <Text>{commerce}</Text>
         <Text>{name}</Text>
       <View style={Style.ConteinerDatos}>
         <Text>$ {price}</Text>
       </View>
       <View style={Style.conteinerContador}>
         <Text>{count}</Text>
         <TouchableHighlight onPress={AddProducts}>
          <Text>+</Text>
        </TouchableHighlight>         
        <Button onPress={SubtractProducts} title="-" />
         <Button onPress={DeleteProduct} title="Eliminar"/>
       </View>
        </View>
    {/* <Text>No tiene productos en su carrito 🥹</Text> */}
  
    </>
  )
}

const Style = StyleSheet.create({
    containerCard: {
        backgroundColor: '#DAF4F0',
        width: '90%',
        height: 150,
        alignItems: 'center',
        margin: 10,
        flexDirection:'row',
    },
    text:{
        fontSize: 40
    },
    conteinerContador: {
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
      width: 100,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    conteinerImage: {
      width: "40%",
      height: 100,
      overflow: 'hidden',
      justifyContent: 'center',
      resizeMode: 'stretch'
    },
    img:{
      width: "100%",
      height: 150,
    },
    ConteinerDatos:{
      flexDirection: 'column'
    },
    buttonContador:{
      fontSize: 20
    }
})