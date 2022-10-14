import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import CardComercio from '../Components/CardComercio';
import Serch from '../Components/Search';
import ButtonOrange from './Buttons/ButtonOrange';
import Constants from 'expo-constants';



export default function Inicio (props) {
  //console.log(props)

  const {navigation} = props;

  const goToProductos= () => {
    navigation.navigate("Productos")
  }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.containerMenu}>
          <Image source={require('../assets/logo-small.png')} style={styles.logo}/>
          <Serch/>
          <Image source={require('../../assets/busqueda.png')} style={styles.busqueda}/>
        </View>
        
        <View style={styles.container}>
          <ButtonOrange style={styles.ButtonOrange} onPress={goToProductos} text="Explorar" />
        </View>
  
        <Text style={styles.title}>Bienvenido!</Text>

        <View style={styles.containerTop}>
          <Text style={styles.textTop}>TOP 10</Text>
          <Image source={require('../../assets/copa.png')} />
        </View>

        <CardComercio/>
        <CardComercio/>
        <CardComercio/>
        <CardComercio/>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor:'#F7FDFD',
    height:'100%'
  },
  logo:{
    marginLeft:20
  },
  containerMenu:{
    flexDirection:'row',
    marginTop: Constants.statusBarHeight
  },
  busqueda:{
    marginTop:5
  },
  container:{
    marginLeft:'20%',
    marginTop:15
  },
  text:{
    textAlign:'center',
    fontSize:18,
    color:'#184D47',
    fontWeight:'bold'
  },
  title:{
    textAlign:'center',
    fontSize:20,
    marginTop:15
  },
  containerTop:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:15,
    marginBottom:25,
  },
  textTop:{
    fontWeight:'bold',
    color:'#17443F',
    fontSize:18
  }
 

})