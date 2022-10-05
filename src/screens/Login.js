import { View, TextInput, StyleSheet, Text, Button, Alert,TouchableHighlight ,Image} from 'react-native';
import React ,{ useState }from 'react';
import ButtonGreen from './Buttons/ButtonGreen';

export default function Login(props) {
    const {navigation} = props;
//   console.log(navigation)
    const goToSettings= () => {
        // navigation.navigate("Settings")
        alert("Vamos a inicio")
      }
    const goBack = () => {
        navigation.goBack("Home")
    }

    const [email , useEmail] = useState('')
    const [password, usePassword] = useState(null)
    

  return (
    <View style={styles.container}>
        <View style={styles.containerForm}>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={()=>{}} placeholder='Ingresa tu email' keyboardType="email-address" value={email} autoCapitalize="none" />
            <Text>Contraseña</Text>
            <TextInput style={styles.input} placeholder='Ingresa tu contraseña' keyboardType="visible-password" value={password} />
            <View style={styles.button}>
                <ButtonGreen  onPress={goToSettings} text="Iniciar Sesión" />
            </View>
            <View style={styles.text}>
            <Text>Me olvide la Contraseña.</Text>
            </View>
        </View>
        <TouchableHighlight onPress={goBack} style={styles.buttonVolver}>
            <Image source={require("../assets/BotonVolver.png")}/>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    // alignSelf: "center",
    backgroundColor: "#F7FDFD",
        width: "100%",
        flex: 1,
        //padding: 30,
        alignContent: "center",
        alignItems: "center"
    },
    input: {
        height: 44,
        width: 286,
        borderRadius: 3,
        borderWidth: 0,
        padding: 10,
        backgroundColor: "#DAF4F0",
        //paddingLeft: 10,
        paddingRight: 10,
        marginVertical: 10,
    },
    containerForm: {
        alignSelf: "center",
        flex: 1,
       // width: "100%",
        // padding: 24,
        flexDirection: "column",
        // alignItems: "flex-start",    
        backgroundColor: "#F7FDFD",
        justifyContent: "center",
    },
    button:{
        margin: 20,
        paddingTop: 50
    },
    text: {
        textAlign: "center",
        alignSelf: "center",
        color: "#F7FDFD"
    },
    buttonVolver: {
    alignItems: "flex-end"
    }
})