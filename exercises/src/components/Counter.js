import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Style from './styles';

export default ({init = 0, step = 1}) => {
  const [number, setNumber] = useState(init);

  const inc = () => {
    console.warn("Entrei inc", number);
    setNumber(number + step);
  };

  const dec = () => {
    console.warn("Entrei dec", number);
    setNumber(number - step);
  };

  return (
    <>
      <Text style={Style.biggerText}> {number}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
