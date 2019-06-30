import React, { Component } from 'react';
import SignupPageTwoPresentation from '../presentation';

const SignupPageTwo = props => {
  state = {
    date: ''
  };

  function handleLogout() {
    props.navigation.navigate('Auth');
  }

  function handleNext() {
    props.navigation.navigate('SignupOne');
  }

  return <SignupPageTwoPresentation onSignup={handleLogout} onNext={handleNext} />;
};

export { SignupPageTwo };
