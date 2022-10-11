import { Text, View, Button } from "react-native";
import React from "react";
// import Navbar from './Navbar';

export default function MiPerfil(props) {
   const { navigation } = props;

  const goToInicio = () => {
    navigation.navigate("Inicio");
  };
  return (
    <View>
      <Text>Mi perfil</Text>
      <Text>Datos personales</Text>
      <Text>Nombre</Text>

      <Button onPress={goToInicio} title="Ir a Inicio" />
    </View>
  );
}
