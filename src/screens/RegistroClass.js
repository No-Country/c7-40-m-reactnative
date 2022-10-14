import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import ButtonGreen from "./Buttons/ButtonGreen";

export default class Register extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    password: "",
    direccion: "",
    username: "",
  };

  submit = () => {
    const { username, direccion, password, number, email, name } = this.state;
    if (
      (username == "",
      direccion == "" || password == "",
      email == "" || name == "")
    ) {
      alert("all fields are required");
    }
  };

  render() {
    const { navigation } = props;

    const goToConfirma = () => {
      navigation.navigate("ConfirmarCuenta");
    };

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15 }}>Registro</Text>

        <Text>Nombre</Text>
        <TextInput
          onChangeText={(username) => this.setState({ username })}
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            width: "70%",
            marginTop: 10,
            fontSize: 12,
          }}
        />
        <Text>Email</Text>
        <TextInput
          onChangeText={(username) => this.setState({ username })}
          placeholder=""
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            width: "70%",
            marginTop: 10,
            fontSize: 18,
          }}
        />
        <Text>Teléfono</Text>
        <TextInput
          onChangeText={(username) => this.setState({ username })}
          placeholder=""
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            width: "70%",
            marginTop: 10,
            fontSize: 18,
          }}
        />
        <Text>Dirección</Text>
        <TextInput
          onChangeText={(username) => this.setState({ username })}
          placeholder=""
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            width: "70%",
            marginTop: 10,
            fontSize: 18,
          }}
        />
        <Text>Contraseña</Text>
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          placeholder=""
          secureTextEntry={true}
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            width: "70%",
            marginTop: 10,
            fontSize: 18,
          }}
        />
        <ButtonGreen onPress={goToConfirma} text="Confirmar Cuenta" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
