import * as React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity ,Image} from "react-native";
import Back from "../../assets/background.png";


export default function Landing(props) {
    const{navigation}= props;
    // console.log(props);
    const goToHome = () => {
        navigation.navigate('Login');
      };
    const goToSettings = () => {
        navigation.navigate('Settings');
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
        <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Text> Inicio Sesion </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSettings}>
        <Text> Registro </Text>
      </TouchableOpacity>
    </View>
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
    margin: 30,
    fontSize: 24,
    textAlign: "center",
    color: "#8EB1AC",
    paddingTop: 50,
  },
});
