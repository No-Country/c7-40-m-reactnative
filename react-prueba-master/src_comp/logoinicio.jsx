import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
  }
});