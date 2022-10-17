import { TouchableHighlight,Text, StyleSheet} from 'react-native'
import React from 'react'

export default function ButtonOrange({onPress, text,img}) {

  return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#FAD586"
        onPress={onPress}>
            <Text style={styles.buttontext}>{text}</Text> 
      </TouchableHighlight>  
  )
}

const styles = StyleSheet.create({
  button: {
    height:50,
    width:200,
    backgroundColor: "#FAD586",
    borderRadius: 20,
    marginTop:10,
    elevation:8,
    justifyContent:'center',
    marginLeft:20
  },
  buttontext: {
    color: "#184D47",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: 'center',
    fontWeight:'bold',
  }
})