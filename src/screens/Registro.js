import { Text, View, Button } from 'react-native'
import React from 'react'
// import Navbar from './Navbar';

export default function Registro (props) {
  // console.log(props)
  const {navigation} = props;

  const goToConfirma= () => {
    navigation.navigate("ConfirmarCuenta")
  }
    return (
      <View>
        <Text>REGISTRO</Text>
        <Button onPress={goToConfirma} title='Confirma Cuenta' />
      </View>
    )
  
}