import React from 'react';
import LogotipoImage from '../images/login.png';
import { View, Text, Image, TextInput, StatusBar, Button } from 'react-native';

const LoginPagePresentation = props => {
  return (
    <View>
      <StatusBar hidden />
      <Image source={LogotipoImage} />

      <TextInput
        type="text"
        placeholder="Email"
        value={props.value.email}
        onChangeText={props.onChange('email')}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Senha"
        value={props.value.password}
        onChangeText={props.onChange('password')}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button title="Entrar" onPress={props.onLogin} />

      <Text>Signup</Text>
    </View>
  );
};
export default LoginPagePresentation;
