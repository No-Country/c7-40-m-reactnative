import React from "react";
import { View, Text ,StyleSheet, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import CardProductosCarrito from "../Components/CardProductosCarrito";

const Carrito = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <Text style={styles.text}>Carrito</Text>
      <Image style={styles.image} source={require('../assets/carrito.png')} />
      </View>
      <View style={styles.conteinerCard}>
      <CardProductosCarrito/>
      <CardProductosCarrito/>
      <CardProductosCarrito/>
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
