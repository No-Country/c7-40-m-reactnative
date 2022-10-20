import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect} from 'react'
import ButtonOrange from './Buttons/ButtonOrange';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import CardProductos from '../Components/CardProductos';
import Constants from 'expo-constants';

export default function Inicio (props) {
  const { getProducts, productos, auth} = useAuth()
  // if(productos != undefined){
  //   const productosDisponibles = productos
  //   return productosDisponibles
  // } else {
  //   const productosNoDisponible = 
  // }
  console.log('PRODUCTOS', productos)
  useEffect(()=>{
    axios.get('https://tester-server-production.up.railway.app/api/v1/products/').then((response) => {
      getProducts(response.data.data.products)
    }).catch((error)=>{
      console.log('error get products', error)
    })
  },[])

  const {navigation} = props;

  const goToSettings= () => {
    navigation.navigate("Settings")
  }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.productos}>PRODUCTOS</Text>
          <Image source={require('../assets/hambur.png')} />
        </View>
        <View style={styles.containerButton}>
          <ButtonOrange style={styles.ButtonOrange} onPress={goToSettings} text="Filtrar" />
        </View>
        {productos.length === 0 ? 
        <Text>No hay productos disponibles</Text>
        :
        productos.map((a) => (
            <View key={a.id}>
              <CardProductos 
              token= {auth.data.token}
              id={a.id}
              name={a.name} 
              img={a.productImgs}
              price={a.price} 
              cantidad={a.quantity} 
              description={a.description} 
              commerce={a.commerce} />
            </View>
     ))
      }
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor:'#F7FDFD',
    height:'100%'
  },
  container:{
    flexDirection:'row',
    marginLeft:20,
    marginTop: Constants.statusBarHeight,
  },
  productos:{
    fontSize:30,
    marginRight:10,
    fontFamily:'poppins-light'
  },
  containerButton:{
    marginLeft:'20%',
    marginBottom:40
  }

})