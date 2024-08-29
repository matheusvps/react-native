import React from "react";
import { Text } from 'react-native'
import Style from './styles'

export default () => {
    console.warn('Opa :)');
    return ( <Text style={Style.biggerText}> First ! </Text> )
}