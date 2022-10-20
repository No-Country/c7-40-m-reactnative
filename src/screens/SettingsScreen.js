import { Text, View, StyleSheet, Image, FlatList, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants';
import { Card } from "react-native-paper";


export default function SettingsScreen (props) {
    
    return (
 <View  style={styles.container} >
        <View style={styles.productos}>
          <Text style={styles.titulo}>Filtrar</Text>
          <Image source={require('../assets/hambur.png')} />
        </View>
<Card style={styles.card}>
        <FlatList
        data={[
          {key: 'Frutas y Verduras'},
          {key: 'Vegano'},
          {key: 'Carnes'},
          {key: 'Celíaco'},
          {key: 'Pescado'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </Card>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginTop: Constants.statusBarHeight,
  },
  productos:{
    flexDirection:'row',
    fontSize:30,
    marginRight:10,
    color:'#184D47'
  },
  titulo:{
    fontSize:30,
    marginRight:10,
    color:'#184D47'
  },
  card: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: "#DAF4F0",
  },
  item:{
    fontSize:15,
  textAlign: 'center',
  },

})