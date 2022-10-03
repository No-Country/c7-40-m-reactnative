import { View, TextInput, StyleSheet, Text, Button} from 'react-native';
import React ,{ useState }from 'react';


export default function Login() {
    const [email , useEmail] = useState('')
    const [password, usePassword] = useState(null)
  return (
    <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={()=>{}} placeholder='email@gmail.com' keyboardType="email-address" value={email} autoCapitalize="none" />
        <Text>Contraseña</Text>
        <TextInput style={styles.input} placeholder='Contraseña' keyboardType="visible-password" value={password} />
        <Button  color="#184D47" onPress={()=> {}} title="Ingresar"></Button>
        <Text>Me olvide la Contraseña</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 44,
        width: 286,
        borderRadius: 3,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        backgroundColor: "#DAF4F0",
    },
    container: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        backgroundColor: "#F7FDFD",
    },
    // button_iniciar_sesion: {
        
    // }
})