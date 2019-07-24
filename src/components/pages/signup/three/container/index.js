import React, { Component } from 'react';
import SignupPageThreePresentation from '../presentation';

const SignupPageThree = props => {
  function handleBack() {
    props.navigation.navigate('SignupTwo');
  }

  return <SignupPageThreePresentation onBack={handleBack} />;
};

export { SignupPageThree };
