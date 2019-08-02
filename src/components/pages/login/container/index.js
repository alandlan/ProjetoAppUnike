import React, { useState } from 'react';
import { LogonService } from '../../../../services';
import LoginPagePresentation from '../presentation';
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = props => {
  const [form, setForm] = useState({
    email: '1@teste.com.br',
    password: 'ale123'
  });
  const [load, setLoad] = useState(false);

  async function handleLogin() {
    setLoad(true);
    try {
      const response = await LogonService.signIn(form);
      await AsyncStorage.setItem('unikeToken', response.token || 'testeToken');
      console.log('LOGIN OK');
      props.navigation.navigate('App');
    } catch (err) {
      props.navigation.navigate('App');
      // setForm({
      //   ...form,
      //   error: {
      //     message: err.message
      //   }
      // });
    }
  }

  function handleSign() {
    props.navigation.navigate('SignupOne');
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
    <LoginPagePresentation
      error={form.error}
      load={load}
      value={form}
      onChange={handleChange}
      onLogin={handleLogin}
      onSignup={handleSign}
    />
  );
};

export { LoginPage };
