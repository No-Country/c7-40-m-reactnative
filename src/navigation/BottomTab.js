import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio.js";
import MiPerfil from "../screens/MiPerfil";
import Carrito from "../screens/Carrito.js";
import Nosotros from "../screens/Nosotros.js";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="MiPerfil" component={MiPerfil} />
      <Tab.Screen name="Carrito" component={Carrito} />
      <Tab.Screen name="Nosotros" component={Nosotros} />
    </Tab.Navigator>
  );
};
