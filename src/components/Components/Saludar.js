import React from "react";
import {View, Text} from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
const { nombre } = props;

    return(
        <View>
            <Text>Holaaa {nombre}!</Text>
        </View>
    );
}

Saludar.defaultProps = {
    nombre: 'Jocelyn',
} // las props por default es mejor fuera del componente 

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired
}