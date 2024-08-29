import React from 'react';
import {Text} from 'react-native';
import Style from './styles';

export default props => {
  console.warn(props);

  return (
    <Text style={Style.biggerText}>
      O valor {props.max} é maior que o valor {props.min}
    </Text>
  );
};
