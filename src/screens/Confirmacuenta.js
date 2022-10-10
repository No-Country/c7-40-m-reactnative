import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import ButtonGreen from './Buttons/ButtonGreen';

export default function Cuentaconfirmada(props) {
        const {navigation} = props;
        
        const goToMiperfil = () => {
            navigation.navigate("MiPerfil");
        }
        return (
      <View>
        <Text>Tu cuenta se creo satisfactoriamente.</Text>
        <Text>Te enviamos un email para la confirmacion.</Text>
        <View>
          <ButtonGreen onPress={goToMiperfil} text="Mi Perfil" />
        </View>
      </View>
   
    );
  
}

const styles = StyleSheet.create({
  container:{
  // alignSelf: "center",
  backgroundColor: "#F7FDFD",
      width: "100%",
      flex: 1,
      //padding: 30,
      alignContent: "center",
      alignItems: "center"
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
  containerForm: {
      alignSelf: "center",
      flex: 1,
     // width: "100%",
      // padding: 24,
      flexDirection: "column",
      // alignItems: "flex-start",    
      backgroundColor: "#F7FDFD",
      justifyContent: "center",
  },
  button:{
      margin: 20,
      paddingTop: 50
  },
  text: {
      textAlign: "center",
      alignSelf: "center",
      color: "#F7FDFD"
  },
  buttonVolver: {
  alignItems: "flex-end"
  }
})