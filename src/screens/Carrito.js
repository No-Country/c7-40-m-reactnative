import React from "react";
import { View, Text , StyleSheet} from "react-native";
import Constants from 'expo-constants';

const Carrito = () => {
  return (
    <View style={styles.container}>
      <Text>Lista de Carrito</Text>
      <Text>Lista de Carrito</Text>
      <Text>Lista de Carrito</Text>
      <Text>Lista de Carrito</Text>
      <Text>Lista de Carrito</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: Constants.statusBarHeight

  }
})

export default Carrito;
