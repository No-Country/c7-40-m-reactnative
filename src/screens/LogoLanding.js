import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function LogoLanding() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/SaveFood.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  });
