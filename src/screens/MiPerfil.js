import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import ButtonGreen from "./Buttons/ButtonGreen";
import Constants from 'expo-constants';

export default function MiPerfil(props) {
  const { navigation } = props;

const {auth, logoutUser} = useAuth()
    // console.log(auth.data.user.firstName)
  const logout = () => {
    logoutUser()
    navigation.navigate("Landing");
    undefined
  };

  return (
    <View style={styles.container}>
      {auth? 
      <View>
        <Text style={styles.title}>Mi Perfil</Text>
        <View style={styles.containerData}>
          <Text style={styles.subtitle}>Nombre</Text>
          <Text style={styles.data}>{auth.data.user.firstName}</Text> 
        </View>

        <View style={styles.containerData}>
          <Text style={styles.subtitle}>Apellido</Text>
          <Text style={styles.data}>{auth.data.user.lastName}</Text> 
        </View>

        <View style={styles.containerData}>
          <Text style={styles.subtitle}>Direccion</Text>
          <Text style={styles.data}>{auth.data.user.address}</Text> 
        </View>

        <View style={styles.containerData}>
          <Text style={styles.subtitle}>Telefono</Text>
          <Text style={styles.data}>{auth.data.user.mobile}</Text> 
        </View>  

        <View style={styles.containerData}>
          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.data}>{auth.data.user.email}</Text> 
        </View>  
      </View> :
      <Text> Debe iniciar sesion</Text>
    }
      <View>
        <ButtonGreen onPress={logout} text="Cerrar Sesion" />
      </View>
        
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    marginTop: Constants.statusBarHeight,
    flex:1,
    justifyContent:'center'
  },
  title:{
    fontSize:30,
    marginBottom:40
  },
  containerData:{
    flexDirection:'row',
    marginBottom:25,
    alignItems:'center',
    justifyContent:'space-evenly',
    width:'100%'
  },
  data:{
    height: 44,
    width: 230,
    borderRadius: 3,
    padding: 8,
    backgroundColor: "#DAF4F0",
    marginVertical: 10,
  }

})