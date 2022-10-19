import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { userDetails } from "../utils/userDB";
// import Navbar from './Navbar';
import useAuth from '../hooks/useAuth';

export default function MiPerfil(props) {
  const { navigation } = props;

const {auth, logoutUser} = useAuth()
  // console.log(auth.data.user.firstName)
  const logout = () => {
    logoutUser()
    navigation.navigate("Landing");
  };
//   return (
//     <View>
//       <Text>Este es mi perfil</Text>
//       {auth? <Text>{auth.data.user.firstName}</Text> : 
//       <Text>{userDetails.username}</Text>
//       }
//       <Button onPress={logout} title="Cerrar Sesion" />
// >>>>>>> login
//     </View>

  return (
    <View style={styles.container}>
      <View>
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
        <Button onPress={logout} title="Cerrar Sesion" />
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
