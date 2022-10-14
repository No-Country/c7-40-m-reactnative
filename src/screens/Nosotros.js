import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Back from "../../assets/background.png";

const Nosotros = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
        <View style={styles.containerLogo}>
          <Image source={require("../../assets/SaveFood.png")} />
        </View>
        <Text style={styles.paragraph}>
          Aplicación orientada a reducir el desperdicio de comida dentro del
          mercado gastronómico, el objetivo es conectar al público interesado
          con distintos comercios en el rubro gastronómico ofreciendo canastas
          diarias o packs sorpresa de comida en buen estado y a un precio más
          accesible.
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
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
