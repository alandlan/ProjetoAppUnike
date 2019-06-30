import React, { Component } from 'react';
import SignupPageOnePresentation from '../presentation';

const SignupPageOne = props => {
  state = {
    date: ''
  };

  function handleLogout() {
    props.navigation.navigate('Auth');
  }

  return <SignupPageOnePresentation onSignup={handleLogout} />;
};

export { SignupPageOne };
