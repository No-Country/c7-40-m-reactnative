import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import CardComercio from '../Components/CardComercio';
import Serch from '../Components/Search';
import useAuth from '../hooks/useAuth';



export default function Inicio (props) {
  //console.log(props)
  const {auth} = useAuth()

  const {navigation} = props;

  const goToProductos= () => {
    navigation.navigate("Productos")
  }
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.containerMenu}>
          <Image source={require('../assets/logo-savefood.png')}/>
          <Serch/>
          <Image source={require('../../assets/busqueda.png')} style={styles.busqueda}/>
        </View>
        {auth ? 
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={goToProductos}>
              <Text style={styles.text}>Explorar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Bienvenido {auth.data.user.firstName}!</Text>
  
          <View style={styles.containerTop}>
            <Text style={styles.textTop}>TOP 10</Text>
            <Image source={require('../../assets/copa.png')} />
          </View>
  
          <CardComercio/>
          <CardComercio/>
          <CardComercio/>
          <CardComercio/> 
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
  containerMenu:{
    flexDirection:'row',
    justifyContent:'space-around'
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
  },
  busqueda:{
    marginTop:15
  }

})