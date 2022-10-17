import { Text, View, Button } from "react-native";
import React from "react";
import { userDetails } from "../utils/userDB";
// import Navbar from './Navbar';
import useAuth from "../hooks/useAuth";

export default function MiPerfil(props) {
  // console.log(props)
  const { navigation } = props;
  const {auth, logoutUser} = useAuth()
  // console.log(auth.data.user.firstName)
  const logout = () => {
    logoutUser()
    navigation.navigate("Landing");
  };
  return (
    <View>
      <Text>Este es mi perfil</Text>
      {auth? <Text>{auth.data.user.firstName}</Text> : 
      <Text>{userDetails.username}</Text>
      }
      <Button onPress={logout} title="Cerrar Sesion" />
    </View>
  );
}
