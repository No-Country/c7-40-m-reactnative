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
        padding: 5,
        borderRadius:15,
        width:130,
        height:40,
        borderColor:'#184D47',
        marginTop:10
      }
})

