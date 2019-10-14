import React from 'react';
import { Container, Label, Button } from 'native-base';
import { Text, View, StatusBar } from 'react-native';
import { HeaderSignup } from '../../../../templates';
import style from './style';
import { CategoryList } from '../../../../templates';

const SignupPageThreePresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <StatusBar hidden />

      <CategoryList data={props.data.services.value} onChange={props.onChange('services')} />
    </Container>
  );
};

export default SignupPageThreePresentation;
