import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text ,StyleSheet, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import CardProductosCarrito from "../Components/CardProductosCarrito";
import useAuth from "../hooks/useAuth";

const Carrito = (props) => {
  const {auth} = useAuth()
  const {navigation} = props;
  console.log(navigation)
  // console.log(auth.data.token);
  const [data , setData] = useState([])
  // const dataQuantity = data[0].productsInCarts?.map(a => a.quantity)
  const token = auth ? auth.data.token : undefined;
  useEffect(()=>{
    axios.get('https://tester-server-production.up.railway.app/api/v1/cart/' , {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      setData([res.data.data.cart])
      
    }).catch(error=>{
      console.log(error)
    })
  },[])
  // console.log(data[0].productsInCarts)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.text}>Carrito</Text>
      <Image style={styles.image} source={require('../assets/carrito.png')} />
      </View>
      <View style={styles.conteinerCard}>
        {data? data[0]?.productsInCarts.map((obj)=> (
            <View key={obj.id}>
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
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 20,
    marginTop: 10
  },
  image:{
    marginHorizontal: 20
  },
  conteinerCard: {
    alignItems: 'center',
    margin: 20,
    with: '100%'
  }
});

export default Carrito;
