import { View, TextInput, StyleSheet, Text, Button, Alert,TouchableHighlight ,Image} from 'react-native';
import React ,{ useEffect, useState }from 'react';
import ButtonGreen from './Buttons/ButtonGreen';
import { userDetails } from '../utils/userDB';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';


export default function Login(props) {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
                email: Yup.string().email('Su email debe ser valido').required('El email es obligatorio'),
                password: Yup.string().required('La contraseña es obligatorio')
        }),
        onSubmit: () => {
            if(formik.values.email === userDetails.userEmail &&  formik.values.password === userDetails.password){
                navigation.navigate("Inicio")
            }
             else {
                alert('vuelva a ingresar email o contraseña')
                // return navigation.navigate("Login")
            }
        }
    })

    const {navigation} = props;
   
    //-------LOGIN
    // const [email , useEmail] = useState('')
    // const [password, usePassword] = useState('')

    // const getEmail = (event) => {
    //     useEmail(event)
    //     //console.log(email)
    // }
    
    // const getPassword = (event) => {
    //     usePassword(event)
    //     // console.log(password)
    // }

    // const goToInicio= () => {
    
    //     if(email === userDetails.username && password === userDetails.password){
    //         navigation.navigate("Inicio")
    //     } else {
    //         alert('vuelva a ingresar email o contraseña')
    //         return navigation.navigate("Login")
    //     }
    
    // }

    const goBack = () => {
        navigation.goBack("Home")
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.containerForm}>
            <Text>Email</Text>
            <TextInput 
            style={ formik.errors.email ? styles.inputError : styles.input }
            placeholder='Ingresa tu email' 
            keyboardType="email-address" 
            autoCapitalize="none"  
            value={formik.values.email} 
            onChangeText={(text) => formik.setFieldValue('email', text)} />
            <Text style={styles.textError} >{formik.errors.email}</Text>
            <Text>Contraseña</Text>
            <TextInput 
            style={ formik.errors.password ? styles.inputError : styles.input }
            placeholder='Ingresa tu contraseña' 
            onChangeText={(text) => formik.setFieldValue("password", text)}
            keyboardType="password"
            value={formik.values.password} 
            secureTextEntry={true} />   
            <Text style={styles.textError} >{formik.errors.password}</Text>
            <View style={styles.button}>
                <ButtonGreen  onPress={formik.handleSubmit} text="Iniciar Sesión" />
            </View>
            <View style={styles.text}>
                <Text>Me olvide la Contraseña.</Text>
            </View>
        </View>
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
    },
    inputError: {
        height: 44,
        width: 286,
        borderRadius: 3,
        borderWidth: 0,
        padding: 10,
        backgroundColor: "#DAF4F0",
        //paddingLeft: 10,
        paddingRight: 10,
        marginVertical: 10,
        borderColor: '#CC5252',
        borderWidth:1
    },
    textError: {
        color: "#CC5252"
    }
})