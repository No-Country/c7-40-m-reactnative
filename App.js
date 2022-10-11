import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {

  return (
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    );  
}


