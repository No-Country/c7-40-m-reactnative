import React from "react";
import {Alert, Button, Text, TextInput, View} from 'react-native';
import Saludar from "./Saludar";

export default function LoginForm() {

    const createThreeButtonAlert = () =>
    Alert.alert(
      "Soy una alerta",
      "Toca algun boton",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
        <View>
            <Saludar />
            <Saludar nombre='Manuel'/>
            <Text>Componente Login form</Text>
            <Text>Soy otro texto</Text>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Enviar" onPress={createThreeButtonAlert}></Button>
        </View>
    )
    
}