import {TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function Search(){
  return (
      <TextInput style={styles.input} placeholder="Busqueda" />
  )

}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderRadius:15,
        height:40,
        borderColor:'#184D47',
        width:140,
        marginLeft:20
      }
})

