import React, { useState } from 'react';
import { View, Text, Image, TextInput, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import LogotipoImage from './images/login.png';
import LogonService from '../../../services';

window.btoa = require('Base64').btoa;

const LoginPage = props => {
  const [form, setForm] = useState({
    email: '1@teste.com.br',
    senha: 'ale123'
  });

  function handleLogin() {
    LogonService.get(form)
      .then(() => {
        props.navigation.navigate('Home');
      })
      .catch(() => {});
  }

  function handleChange(element) {
    return value => {
      setForm({
        ...form,
        [element]: value
      });
    };
  }
  return (
    <>
      <View>
        <StatusBar hidden />
        <Text>{content.err}</Text>
        {/* <Text>{content.data}</Text> */}
        <Image source={LogotipoImage} />

        <TextInput
          type="text"
          placeholder="Email"
          value={form.email}
          onChangeText={handleChange('email')}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Senha"
          value={form.senha}
          onChangeText={handleChange('senha')}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleLogin} />

        <Text>Signup</Text>
      </View>
    </>
  );
};

export { LoginPage };
