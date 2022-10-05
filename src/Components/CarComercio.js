

import { View, Text, Image} from 'react-native'
import React from 'react'
import {Card, Paragraph, Title} from 'react-native-paper';


export default function CardComercio(){

    // const{nombre, comentarios } = props //Destructuring Props

  return (
    <Card>
        <Card.Title title="La cocina de Toto"/>
        <Paragraph>“ La gente súper servicial y atenta pero hay muy poco surtido en bebidas y otros. “</Paragraph>
        <Image source={require('../../assets/corazones.png')} />
    </Card>
  )

}