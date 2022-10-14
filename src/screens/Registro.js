import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import ButtonGreen from "./Buttons/ButtonGreen";

export default function Registro(props) {
  const { navigation } = props;
  const goToConfirma = () => {
    navigation.navigate("ConfirmarCuenta");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingresa tu Nombre"
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingresa tu Email"
        />

        <Text>Teléfono</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingresa tu Teléfono"
        />

        <Text>Dirección</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingresa tu Dirección"
        />

        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingresa tu Contraseña"
        />
      </View>

      <ButtonGreen onPress={goToConfirma} text="Confirmar Cuenta" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FDFD",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 44,
    width: 286,
    borderRadius: 3,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#DAF4F0",
    //paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
  },
});
