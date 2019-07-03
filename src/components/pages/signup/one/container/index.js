import React from 'react';
import SignupPageOnePresentation from '../presentation';

const SignupPageOne = props => {
  function handleLogout() {
    props.navigation.navigate('Auth');
  }

  function handleNext() {
    props.navigation.navigate('SignupTwo');
  }

  return <SignupPageOnePresentation onSignup={handleLogout} onNext={handleNext} />;
};

export { SignupPageOne };
