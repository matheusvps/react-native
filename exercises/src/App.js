import React from 'react';
import {View, StyleSheet} from 'react-native';

// import First from './components/First'
// import { Component, Component1, Component2 } from "./components/Multiple";
// import MinMax from "./components/MinMax";
// import Aleatory from "./components/Aleatory";
// import Title from './components/Title';
// import Button from './components/Button';
import Counter from './components/Counter';

export default () => (
  <View style={style.App}>
    <Counter init={100} step={2}/>
    {/* <Button /> */}
    {/* <Title principal="Aham" secundario="Sei" /> */}
    {/* <MinMax min={3} max={20}/> */}
    {/* <Aleatory min={3} max={20}/> */}
    {/* <Component/> */}
    {/* <Component1/> */}
    {/* <Component2/> */}
    {/* <First/>  */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
