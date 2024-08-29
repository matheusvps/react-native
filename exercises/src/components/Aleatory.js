import React from 'react';
import {Text, View} from 'react-native';
import Style from './styles';

// Receive two numbers and show aleatory number between then
export default ({min, max}) => {
  console.warn(min, max);

  const random = (Math.random() * (max - min) + min).toFixed(2);

  return (
    <View>
      <Text style={Style.biggerText}>
        O valor máximo é {max} é o mínimo é {min}
      </Text>

      <Text style={Style.biggerText}>O valor entre eles é {random}</Text>
    </View>
  );
};
