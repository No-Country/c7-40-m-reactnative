import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../screens/Inicio.js";
import MiPerfil from "../screens/MiPerfil";
import Carrito from "../screens/Carrito.js";
import Nosotros from "../screens/Nosotros.js";
import Productos from "../screens/Productos"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#5BB1AC',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} options={{
       // tabBarBadge: ejemplo:654612,
        tabBarIcon: ({ focused }) => (
          <FontAwesome name="home" size={28} color={focused ? "#51D0D1" : "#ADB3B3"} />
        ),
      }} />
    
          <Tab.Screen name="Producto" component={Productos}
        options={{
          tabBarBadgeStyle: { backgroundColor: 'tomato', color: "#F9FFFF" },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="food-outline" size={28} color={focused ? "#51D0D1" : "#ADB3B3"} />
          ),
        }}
      />

      <Tab.Screen name="Carrito" component={Carrito}
        options={{
          tabBarBadgeStyle: { backgroundColor: 'tomato', color: "#F9FFFF" },
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="shopping-cart" size={28} color={focused ? "#51D0D1" : "#ADB3B3"} />
          ),
        }}
      />

        <Tab.Screen name="MiPerfil" component={MiPerfil}
        options={{
          tabBarBadgeStyle: { backgroundColor: 'tomato', color: "#F9FFFF" },
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={28} color={focused ? "#51D0D1" : "#ADB3B3"} />
          ),
        }}
      />

      <Tab.Screen name="Nosotros" component={Nosotros}
        options={{
          tabBarBadgeStyle: { backgroundColor: 'tomato', color: "#F9FFFF" },
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="group" size={28} color={focused ? "#51D0D1" : "#ADB3B3"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};