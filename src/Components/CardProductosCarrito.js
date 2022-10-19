import { View, Text ,StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import axios from 'axios'

export default function CardProductosCarrito({id, data, token, dataQuantity}) {
  
  const [count , setCount] = useState(
    dataQuantity
  )
  // useEffect(()=>{

  //   axios.patch('https://tester-server-production.up.railway.app/api/v1/cart/add-product/update-cart', {
  //     productId: id,
  //     quantity: count
  //   }, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     },
  //   } ).then(res=> {
  //     console.log(res)
  //   }).catch(error)
  // },[])
  
  const dispatchPath = () =>{
    const quantity = count
    const productId = id
    axios.patch('https://tester-server-production.up.railway.app/api/v1/cart/add-product/update-cart', {
      productId,
      quantity
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    } ).then(res=> {
      console.log(res)
    }).catch(error)
  } 

  const AddProducts = () => {
    setCount(count+1)
    dispatchPath()
  }
  const SubtractProducts = ()=> {

  }

  const DeleteProduct = (id , name) => {
    axios.delete(`https://tester-server-production.up.railway.app/api/v1/cart/:${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(res => {
      alert(`Su producto ${name} fue eliminado`)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
    {data? data.map((obj)=> (
      <View key={obj.productId}>
        <Text>{obj.product.commerce.name}</Text>
         <Text>{obj.product.name}</Text>
       <View style={Style.ConteinerDatos}>
         <Text>$ {obj.product.price}</Text>
       </View>
       <View style={Style.conteinerContador}>
         <Text>Cantidad {obj.quantity}</Text>
         <Button onPress={AddProducts} >+</Button>
         <Button onPress={SubtractProducts}>-</Button>
         {/* <Button onPress={DeleteProduct(obj.productId, obj.product.name)} >Eliminar</Button> */}
       </View>
        </View>
    )) :
    <Text>No tiene productos en su carrito 🥹</Text>
    }
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