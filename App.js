
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit'
import Reducers from './src/Redux/Reducers'

export default function App() {
  
  return (
    <Provider store ={configureStore({ reducer: Reducers })}>
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    </Provider>
    );  
}


