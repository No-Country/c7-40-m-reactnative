import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    </SafeAreaProvider>
    );  
}


