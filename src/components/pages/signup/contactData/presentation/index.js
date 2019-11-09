import React, { Component } from 'react';
import { HeaderSignup } from '../../../../templates';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Content,
  Button,
  Icon,
  Text,
  Header
} from 'native-base';
import TextInputMask from 'react-native-text-input-mask';

const SignupContactDataPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Text>Vamos entrar em contato através dessas informações, escreva corretamente</Text>
        <Form>
          <Item stackedLabel error={!props.data.email.valid}>
            <Label>E-mail</Label>
            <Input
              value={props.data.email.value}
              onChangeText={props.onChangeForm('email')}
              keyboardType="email-address"
            />
          </Item>

          <Item stackedLabel error={!props.data.celular.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Celular</Label>
            <Input
              value={props.data.celular.value}
              onChangeText={props.onChangeForm('celular')}
              keyboardType="phone-pad"
            />
          </Item>
        </Form>
        <Button onPress={props.onClear}>
          <Text>Clear</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignupContactDataPresentation;
