import React, { Component } from 'react';
import SignupPageTwoPresentation from '../presentation';

const SignupPageTwo = props => {
  state = {
    date: ''
  };

  function handleBack() {
    props.navigation.navigate('SignupOne');
  }

  function handleNext() {
    props.navigation.navigate('SignupThree');
  }

  return <SignupPageTwoPresentation onBack={handleBack} onNext={handleNext} />;
};

export { SignupPageTwo };
