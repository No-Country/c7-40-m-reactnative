import { TouchableHighlight, View ,Text, StyleSheet,Image} from 'react-native'
import React from 'react'

export default function ButtonGreen({onPress, text,img}) {

  return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#F7FDFD"
        onPress={onPress}>
            <Text style={styles.buttontext}>{text}</Text> 
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    // paddingHorizontal: "10",
  },
  button: {
    height: 46,
    width: "auto",
    alignSelf: "center",
    paddingVertical: 10,
    backgroundColor: "#184D47",
    borderRadius: 20,
    // textAlign: 'center'
  },
  buttontext: {
    color: "#F7FDFD",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: 'center'
  }
})