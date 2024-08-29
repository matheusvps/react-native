import React from "react";
import { Text } from 'react-native'
import Style from './styles'

function Component () {
    return <Text style={Style.biggerText}> Comp </Text>
}

function Component1 () {
    return <Text style={Style.biggerText}> Comp #01 </Text>
}

function Component2 () {
    return <Text style={Style.biggerText}> Comp #02 </Text>
}

export {Component, Component1, Component2}