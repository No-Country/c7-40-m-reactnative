import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing.js";
import Login from "../screens/Login";
import Inicio from "../screens/Inicio.js";
import Registro from "../screens/Registro.js";
import ConfirmarCuenta from "../screens/Confirmacuenta.js";
import MiPerfil from "../screens/MiPerfil.js";
import Productos from "../screens/Productos.js"
import SettingsScreen from "../screens/SettingsScreen.js"
import Publicaciones from "../screens/Publicaciones"

import { BottomTab } from "../navigation/BottomTab.js";
const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="ConfirmarCuenta" component={ConfirmarCuenta} />
      <Stack.Screen name="Publicaciones" component={Publicaciones} />
      <Stack.Screen options={{headerShown: false}} name="Inicio" component={BottomTab} />
    </Stack.Navigator>
  );
}
