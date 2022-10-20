import { View, TextInput, StyleSheet, Text, Button, Alert,TouchableHighlight ,Image} from 'react-native';
import React ,{ useEffect, useState }from 'react';
import ButtonGreen from './Buttons/ButtonGreen';
import { userDetails } from '../utils/userDB';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
import { Data, LoginData } from '../Redux/Actions';
import axios from "axios";
import useAuth from '../hooks/useAuth';


export default function Login(props) {
    const { loginUser } = useAuth() // hook que trae todos los valors del estado global
    const { navigation } = props; 

    const {errors , values , handleSubmit, setFieldValue} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
                email: Yup.string().email('Su email debe ser valido').required('El email es obligatorio'),
                password: Yup.string().required('La contraseña es obligatorio')
        }),
        onSubmit: (formValue) => {
                axios.post('https://tester-server-production.up.railway.app/api/v1/users/login', formValue).then((response) => {
                    console.log(response.data)
                    if(response.data.status === 'success'){
                        loginUser(response.data)
                        navigation.navigate("Inicio");  
                    }
                })
                .catch((error) => {
                    console.log('error',error)
                    alert('Vuelve a ingresar el email o la contraseña')
                  navigation.replace("Login");
                });
        }
    })

    const goBack = () => {
        navigation.goBack("Home")
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.containerForm}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput 
            style={ errors.email ? styles.inputError : styles.input }
            placeholder='Ingresa tu email' 
            keyboardType="email-address" 
            autoCapitalize="none"
            value={values.email} 
            onChangeText={(text) => setFieldValue('email', text)} />
            <Text style={styles.textError} >{errors.email}</Text>
            <Text style={styles.textInput}>Contraseña</Text>
            <TextInput 
            style={ errors.password ? styles.inputError : styles.input }
            placeholder='Ingresa tu contraseña' 
            onChangeText={(text) => setFieldValue("password", text)}
            keyboardType="password"
            value={values.password} 
            secureTextEntry={true} />   
            <Text style={styles.textError} >{errors.password}</Text>
            <View style={styles.button}>
                <ButtonGreen title="Login" onPress={handleSubmit} text="Iniciar Sesión" />
            </View>
            <View>
                <Text style={styles.text}>Me olvide la contraseña.</Text>
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
    textInput:{
        fontFamily:'poppins-light'
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
        fontFamily:'poppins-light'
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
        fontFamily:'poppins-light'
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
        borderWidth:1,
    },
    textError: {
        color: "#CC5252",
        fontFamily:'poppins-light'
    }
})