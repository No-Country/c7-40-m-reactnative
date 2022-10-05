import { Text, View, Button } from 'react-native'
import React from 'react'
// import Navbar from './Navbar';


export default function HomeScreen (props) {
  // console.log(props)
  const {navigation} = props;

  const goToLogin= () => {
    navigation.navigate("Login")
  }
    return (
      <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Button onPress={goToLogin} title='Ir a Login' />
      </View>
    )
  
}