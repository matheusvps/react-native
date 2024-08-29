import React from 'react';
import {Text} from 'react-native';
import Style from './styles';

export default props => {
  console.warn(props);
  return (
    <React.Fragment>
      <Text style={Style.biggerText}>{props.principal}</Text>

      <Text>{props.secundario}</Text>
    </React.Fragment>
  );
};
