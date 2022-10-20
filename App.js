
import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
// import { Provider } from 'react-redux';
// import  getDefaultMiddleware  from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
// import Reducers from './src/Redux/Reducers'
import { AuthProvider } from './src/Context/AuthContext'
import  {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


  // const store = configureStore({
  //   reducer: Reducers,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // })


export default function App() {

  let [fontsLoaded] = useFonts({
    'poppins-light': require('./src/assets/Poppins-Light.ttf'),
    'poppins-bold': require('./src/assets/Poppins-Bold.ttf'),
    'poppins-italic': require('./src/assets/Poppins-Italic.ttf'),

  })

  if(fontsLoaded){
    return (
      // <Provider store ={store}>
      <NavigationContainer>
          <AuthProvider>
            <NavigationStack/>
          </AuthProvider>
      </NavigationContainer>
      //</Provider>
      );  

  } else{
    <AppLoading/>
  }


  
   
  // return (
  //   // <Provider store ={store}>
  //   <NavigationContainer>
  //       <AuthProvider>
  //         <NavigationStack/>
  //       </AuthProvider>
  //   </NavigationContainer>
  //   //</Provider>
  //   );  
}


