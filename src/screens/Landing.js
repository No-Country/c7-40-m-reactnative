import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import Back from "../../assets/background.png";
import ButtonGreen from "./Buttons/ButtonGreen";
import ButtonGreenLight from "./Buttons/ButtonGreenLight";

export default function Landing(props) {
  const { navigation } = props;
  // console.log(props);
  const goToHome = () => {
    navigation.navigate("Login");
  };
  const goToRegistro = () => {
    navigation.navigate("Registro");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
        <View style={styles.containerLogo}>
          <Image source={require("../../assets/SaveFood.png")} />
        </View>
        <Text style={styles.paragraph}>
          Nuestro propósito es reducir el desperdicio de productos gastronomicos
          y organicos.
        </Text>
        <View style={styles.button}>
          <ButtonGreen style={styles.buttonGreen} onPress={goToHome} text="Iniciar Sesión" />
          <View style={styles.buttonGreen}>
          <ButtonGreenLight onPress={goToRegistro} text='Registrarse'  />
          </View>
         </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom:15
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 70,
  },
  paragraph: {
    fontSize: 32,
    textAlign: "center",
    color: "#8EB1AC",
    padding:20,
    marginTop:25,
    fontFamily:'poppins-bold',
  },
  button:{
    marginTop: 20,
    paddingTop: 50,
    padding: 50
  },
  buttonGreen:{
    margin: 15
  }

});
