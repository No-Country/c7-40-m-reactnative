import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import App from '../../App'

SplashScreen.preventAutoHideAsync();

export default function Splash() {

    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
      });
      
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
        return (
            <App onLayout={onLayoutRootView}/>
        )
}