
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import { Provider } from 'react-redux';
import  getDefaultMiddleware  from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import Reducers from './src/Redux/Reducers'


  const store = configureStore({
    reducer: Reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })


export default function App() {
  
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    </Provider>
    );  
}


