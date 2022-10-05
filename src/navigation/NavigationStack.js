import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  )
}