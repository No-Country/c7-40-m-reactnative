import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import ButtonGreen from "./Buttons/ButtonGreen";

export default function Cuentaconfirmada(props) {
  const { navigation } = props;

  const goToMiperfil = () => {
    navigation.navigate("MiPerfil");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Tu cuenta se creo satisfactoriamente.
      </Text>
      <Text style={styles.paragraph}>
        Te enviamos un email para la confirmacion.
      </Text>
      <View>
        <ButtonGreen
          style={styles.button}
          onPress={goToMiperfil}
          text="Mi Perfil"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FDFD",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    marginBottom: 20,
  },
  button: {
    marginTop: 50,
    paddingTop: 50,
  },
});
