import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import CardProductos from '../Components/CardProductos';
import ButtonOrange from './Buttons/ButtonOrange';

export default function Inicio (props) {
  console.log(props)

  const {navigation} = props;

  const goToSettings= () => {
    navigation.navigate("Settings")
  }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.productos}>PRODUCTOS</Text>
          <Image source={require('../assets/hambur.png')} />
        </View>
        
        <View style={styles.containerButton}>
          <ButtonOrange style={styles.ButtonOrange} onPress={goToSettings} text="Filtrar" />
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
    marginLeft:20
  },
  productos:{
    fontSize:30,
    marginRight:10,
    color:'#184D47'
  },
  containerButton:{
    marginLeft:'20%',
    marginBottom:30
  }

})