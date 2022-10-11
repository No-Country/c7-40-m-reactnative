import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import CardProductos from '../Components/CardProductos';

export default function Inicio (props) {
  console.log(props)

  const {navigation} = props;

  const goToSettings= () => {
    navigation.navigate("Settings")
  }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.productos}>Productos</Text>
          <Image source={require('../assets/hambur.png')} />
        </View>
        
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={goToSettings}>
            <Text style={styles.text}>Filtrar</Text>
          </TouchableOpacity>
        </View>

        <CardProductos/>
        <CardProductos/>
        <CardProductos/>
        <CardProductos/>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor:'#F7FDFD',
    height:'100%'
  },
  container:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:10
  },
  productos:{
    fontSize:35,
    marginRight:10
  },
  containerButton:{
    marginLeft:'20%',
    marginBottom:30
  },
  button:{
    padding:12,
    backgroundColor: '#FAD586',
    height:50,
    width:250,
    marginTop:20,
    borderRadius:15,
    elevation:8
  },
  text:{
    textAlign:'center',
    fontSize:18,
    color:'#184D47',
    fontWeight:'bold'
  }

})