import { View, TextInput, StyleSheet, Text, Button, Alert,TouchableHighlight ,Image} from 'react-native';
import React ,{ useState }from 'react';
import ButtonGreen from './Buttons/ButtonGreen';
import { userDetails } from '../utils/userDB';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Login(props) {
    const formik = useFormik({
        initialValues: {
            email,
            password
        },
        validationSchema: Yup.object(()=>{ 
            return{
            email: Yup.string().required('El usuario es obligatorio'),
            password: Yup.number().required('La contraseña es obligatorio')
        }}),
        onSubmit: () => {
            if(email === userDetails.username && password === userDetails.password){
                navigation.navigate("Inicio")
            } else {
                alert('vuelva a ingresar email o contraseña')
                return navigation.navigate("Login")
            }
        }
    })

    const {navigation} = props;
   
    //-------LOGIN
    const [email , useEmail] = useState('')
    const [password, usePassword] = useState('')

    const getEmail = (event) => {
        useEmail(event)
        //console.log(email)
    }
    
    const getPassword = (event) => {
        usePassword(event)
        // console.log(password)
    }

    const goToInicio= () => {
    
        if(email === userDetails.username && password === userDetails.password){
            navigation.navigate("Inicio")
        } else {
            alert('vuelva a ingresar email o contraseña')
            return navigation.navigate("Login")
        }
    
    }

    const goBack = () => {
        navigation.goBack("Home")
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.containerForm}>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={getEmail} placeholder='Ingresa tu email' keyboardType="email-address" autoCapitalize="none"  defaultValue={email} />
            <Text>{formik.errors.email}</Text>
            <Text>Contraseña</Text>
            <TextInput style={styles.input} onChangeText={getPassword} placeholder='Ingresa tu contraseña' keyboardType="" value={password} secureTextEntry={true} />
            
            <View style={styles.button}>
                <ButtonGreen  onPress={goToInicio} text="Iniciar Sesión" />
            </View>
            <View style={styles.text}>
            <Text>Me olvide la Contraseña.</Text>
            </View>
            <Text>{formik.errors.email}</Text>
        </View>
        <TouchableHighlight onPress={formik.handleSubmit} style={styles.buttonVolver}>
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