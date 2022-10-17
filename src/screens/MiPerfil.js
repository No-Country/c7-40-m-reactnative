import { Text, View, StyleSheet, TextInput } from "react-native";
import React from "react";
// import Navbar from './Navbar';
import ButtonGreen from "./Buttons/ButtonGreen";

export default function MiPerfil(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Mi Perfil</Text>

        <Text>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Natalia"
        />
        <Text>Apellido</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Mendez"
        />
        <Text>Dirección</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Privet Drive 4"
        />
        <Text>Teléfono</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="094 255 678"
        />
        <Text>Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="natalia@savefood.com"
        />

        <Text style={styles.title}>Cambio de Contraseña</Text>
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="**********"
        />
        <Text>Nueva Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="**********"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FDFD",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:15
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
  title: {
    fontSize: 20,
  },
});
