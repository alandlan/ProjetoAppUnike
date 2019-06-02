import React, { useState } from 'react';
import { LogonService } from '../../../../services';
import LoginPagePresentation from '../presentation';

const LoginPage = props => {
  const [form, setForm] = useState({
    email: '1@teste.com.br',
    password: 'ale123'
  });

  function handleLogin() {
    LogonService.signIn(form)
      .then(() => {
        props.navigation.navigate('Home');
      })
      .catch(err => {
        setForm({
          ...form,
          err: err.message
        });
      });
  }

  function handleChange(element) {
    return value => {
      setForm({
        ...form,
        [element]: value
      });
    };
  }
  return <LoginPagePresentation value={form} onChange={handleChange} onLogin={handleLogin} />;
};

export { LoginPage };
