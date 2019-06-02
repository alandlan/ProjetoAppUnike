import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const LoginPage = props => {
  function goHome() {
    props.navigation.navigate('Home');
  }
  return (
    <>
      <View>
        <Text>sdfsdfsdfd</Text>
        <Text>dfgdfgfdg</Text>
        <Button title="Ir para HOME" onPress={goHome} />
      </View>
    </>
  );
};

export { LoginPage };
