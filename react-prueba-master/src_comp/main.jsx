import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import RegistroPage from "./registro.jsx";
import InicioSPage from "./iniciarSesion.jsx";
import LogoInicio from "./logoinicio.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <LogoInicio />
      <InicioSPage />
      <RegistroPage />
      <Text style={styles.paragraph}>Ejemplo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
