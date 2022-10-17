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
    const {login } = useAuth()
   // const dispatch = useDispatch(); //hook de redux, esto llama a la action osea lo ejecuta
    const { navigation } = props; //ya lo vimos // destructurin 
    // const {DataUserReducer} = useSelector((state) => state)
    // console.log('acaaaa',DataUserReducer.users.data.status)
    // const acceso = DataUserReducer;


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
                    // dispatch(LoginData(formValue))
                    // if(DataUserReducer.users){
                    //     navigation.navigate('Inicio')
                    // }else{
                    //     alert('Vuelve a ingresar el email o la contraseña')
                    // }
                axios.post('https://tester-server-production.up.railway.app/api/v1/users/login', formValue).then((response) => {
                  if (response) {
                    console.log(response.data)
                    if(response.data.status === 'success'){
                        navigation.navigate("Inicio");  
                        login(response.data)
                    } else {
                        alert('Vuelva a ingresar la contraseña')
                    } 
                        
                  }
                })
                .catch((error) => {
                    console.log('error dispach',error)
                  navigation.replace("Login");
                });
                // if(users.status === "success"){
                //     navigation.navigate("Inicio")
                // }
        }
    })

    
   
    //-------LOGIN
    const [email , useEmail] = useState('')
    const [password, usePassword] = useState('')

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
            style={ errors.email ? styles.inputError : styles.input }
            placeholder='Ingresa tu email' 
            keyboardType="email-address" 
            autoCapitalize="none"
            value={values.email} 
            onChangeText={(text) => setFieldValue('email', text)} />
            <Text style={styles.textError} >{errors.email}</Text>
            <Text>Contraseña</Text>
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
            <View style={styles.text}>
                <Text>Me olvide la Contraseña.</Text>
            </View>
        </View>
    </View>
  )
}

// function Handle(datos) {
//     console.log(datos)
//     const dispatch = useDispatch();
//     dispatch(LoginData(datos))
//     .then((response) => {
//       if (response.status == "success") {
//         console.log('puede ingresar')
//         // const {navigation} = props;
//         // navigation.replace("Inicio");
//       }
//     })
//     .catch((error) => {
//         console.log(error)
//     //   navigation.replace("Login");
//     });
//     // if(users.status === "success"){
//     //     navigation.navigate("Inicio")
//     // }
// }




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