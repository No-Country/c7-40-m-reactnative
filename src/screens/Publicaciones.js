import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function Inicio () {
    
      return (
        <View style={styles.container}>
            <Text style={styles.text}>PROXIMAMENTE</Text>
        </View>
        
      )
  }

  const styles = StyleSheet.create({
    container:{
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F7FDFD',
    },
    text:{
      fontSize:35
    }
  })