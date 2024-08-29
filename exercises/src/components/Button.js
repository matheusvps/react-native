import React from 'react';
import {Button} from 'react-native';

export default () => {
  function execute() {
    console.warn('Did something!');
  }

  return (
    <>
      <Button title="Do something" onPress={execute} />
      <Button
        title="Do another thing"
        onPress={function () {
          console.warn('Did another thing!');
        }}
      />
      <Button
        title="Do another thing again"
        onPress={() => console.warn('Did another thing again!')}
      />
    </>
  );
};
