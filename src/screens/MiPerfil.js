import { Text, View, Button } from "react-native";
import React from "react";
import { userDetails } from "../utils/userDB";
// import Navbar from './Navbar';

export default function MiPerfil(props) {
  // console.log(props)
  const { navigation } = props;

  const goToInicio = () => {
    navigation.navigate("Inicio");
  };
  return (
    <View>
      <Text>Este es mi perfil</Text>
      <Text>{userDetails.username}</Text>
      <Button onPress={goToInicio} title="Ir a Inicio" />
    </View>
  );
}
