import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text ,StyleSheet, Image, Linking, TouchableHighlight} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import CardProductosCarrito from "../Components/CardProductosCarrito";
import useAuth from "../hooks/useAuth";

const Carrito = (props) => {
  const {auth ,carrito, getCarrito} = useAuth()
  const {navigation} = props;


  const sumAccount = carrito[0]?.productsInCarts?.map(a => a.quantity*a.product.price)
  const total = sumAccount?.reduce((a, b) => a + b, 0);

  console.log("total", total)

  const token = auth ? auth.data.token : undefined;
  useEffect(()=>{
    axios.get('https://tester-server-production.up.railway.app/api/v1/cart/' , {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      getCarrito([res.data.data.cart])
    }).catch(error=>{
      console.log(error)
    })
    return function () {
      console.log('se desmonto el componente')
    }
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>CARRITO</Text>
        <Image style={styles.image} source={require('../assets/carrito.png')} />
      </View>
      <View style={styles.containerCard}>
        { carrito? carrito[0]?.productsInCarts.map((obj)=> (
            <View key={obj.id} >
            <CardProductosCarrito
            id={obj.productId} 
            name={obj.product.name} 
            commerce={obj.product.commerce.name}
            price={obj.product.price}
            quantity={obj.quantity}
            description={obj.product.description}
            token={token}
            navigation={navigation}
            />
          </View>
        )) :
        <Text>No tiene productos en su carrito 🥹</Text>
      }
      </View>
      <View style={styles.containerTotal}>
        <Text style={styles.total}>TOTAL : $ {total ? total : 0}
        </Text>
      <TouchableHighlight onPress={() =>
                  Linking.openURL(
                    "https://www.paypal.com/uy/webapps/mpp/home?kid=p24451538361&gclid=Cj0KCQjw48OaBhDWARIsAMd966ChImkh5UL8xN_9ePWhox66XWOzhGSXrpQAY-WFA8dERKGl7WVwejoaAr1aEALw_wcB&gclsrc=aw.ds"
                  )}  style={styles.buttonPagar}>
          <Text style={styles.buttontext}>Pagar</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FDFD'
  },
  text:{
    fontSize: 40,
    fontFamily:'poppins-light'
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 20,
    marginTop: 10
  },
  image:{
    marginLeft:20
  },
  containerCard: {
    flex:1
  },
  total:{
    fontSize:18,
    fontFamily:'poppins-bold',
    marginRight:10
  },
  containerTotal:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20
  },
  buttonPagar:{
    backgroundColor: '#184D47',
    height: 46,
    width: "auto",
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttontext: {
    color: "#F7FDFD",
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'center',
    fontFamily:'poppins-light'
  }
});

export default Carrito;
