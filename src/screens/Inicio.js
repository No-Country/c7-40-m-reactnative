import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import CardComercio from '../Components/CardComercio';
import Serch from '../Components/Search';
import ButtonOrange from './Buttons/ButtonOrange';
import Constants from 'expo-constants';
import useAuth from '../hooks/useAuth';
import { comercioDetails } from '../utils/userDB'; 


export default function Inicio (props) {
  const {auth} = useAuth()

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
        {auth ? 
        <View>
          <View style={styles.container}>
            <ButtonOrange onPress={goToProductos} text='Explorar' />
            {/* <TouchableOpacity
              style={styles.button}
              onPress={goToProductos}>
              <Text style={styles.text}>Explorar</Text>
            </TouchableOpacity> */}
          </View>
          <Text style={styles.title}>Bienvenido {auth.data.user.firstName}!</Text>
  
          <View style={styles.containerTop}>
            <Text style={styles.textTop}>TOP 10</Text>
            <Image source={require('../../assets/copa.png')} />
          </View>
          {comercioDetails?.map(obj => {
            return(
            <View key={obj.id}>
              <CardComercio key={obj.id} details={obj.details} coment={obj.details.coment} />
            </View>
            )
          })}
        </View> :
        <Text> Tiene que iniciar sesion para disfrutar de la aplicacion</Text>        
        }

        <Text style={styles}>Menu botones abajo</Text>
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