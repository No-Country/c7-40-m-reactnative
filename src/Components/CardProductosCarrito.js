import { View, Text ,StyleSheet, Image, Button,TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

export default function CardProductosCarrito({id, name, commerce, price, description, quantity, token, navigation}) {

  const [count , setCount] = useState(quantity)
  const { getCarrito} = useAuth()
  const dispatchPath = () =>{
    axios.patch('https://tester-server-production.up.railway.app/api/v1/cart/update-cart', {
      productId: id,
      quantity: count
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    } ).then(res=> {
          axios.get('https://tester-server-production.up.railway.app/api/v1/cart/' , {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }).then(res => {
          getCarrito([res.data.data.cart])
        }).catch(error=>{
          console.log(error)
    })
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
      axios.get('https://tester-server-production.up.railway.app/api/v1/cart/' , {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      }).then(res => {
        getCarrito([res.data.data.cart])
      }).catch(error=>{
        console.log(error)
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (

      <View style={Style.container}>
        { id? 
        <View>
          <Text style={Style.dataProductos}>{commerce}</Text>
         <Text style={Style.dataProductos}>{name}</Text>
       <View style={Style.ConteinerDatos}>
         <Text style={Style.dataProductos}>$ {price}</Text>
       </View>
       <View style={Style.conteinerContador}>
         <Text>{count}</Text>
        <TouchableHighlight onPress={AddProducts} style={Style.button}>
          <Text style={Style.sumaResta}>+</Text>
        </TouchableHighlight>         
        <TouchableHighlight onPress={SubtractProducts}  >
          <Text style={Style.sumaResta}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={DeleteProduct} >
          <Text>Eliminar</Text>
        </TouchableHighlight>
       </View>
        </View>
        :
        <Text></Text>
      }
        
        </View>
    
  )
}

const Style = StyleSheet.create({
    container:{
      marginTop:20
    },
    text:{
        fontSize: 40
    },
    conteinerContador: {
      borderRadius: 20,
      backgroundColor: '#DAF4F0',
      width: 170,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:20,
      marginTop:5,
      justifyContent:'space-evenly'
    },
    ConteinerDatos:{
      flexDirection: 'column'
    },
    sumaResta:{
      fontSize:20
    },
    dataProductos:{
      fontFamily:'poppins-light',
      fontSize:17,
      marginLeft:25
    }
})