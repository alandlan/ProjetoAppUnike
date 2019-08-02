import React, { Component } from 'react';
import { Text, View, TextInput, StatusBar } from 'react-native';
import { HeaderSignup } from '../../../../templates';
import { Container, Form, Item, Label, Input, Content, Button } from 'native-base';
import TextInputMask from 'react-native-text-input-mask';

const SignupPageOnePresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disabled={Object.values(props.valid).includes(false)}
        onBack={props.onBack}
        onForward={props.onForward}
      />
      <StatusBar hidden />
      <Content>
        <Text>Vamos entrar em contato através dessas informações, escreva corretamente</Text>
        <Form>
          <Item stackedLabel error={!props.valid.email}>
            <Label>E-mail</Label>
            <Input
              value={props.data.email}
              onChangeText={props.onChangeForm('email')}
              keyboardType="email-address"
            />
          </Item>
          <Item stackedLabel error={!props.valid.celular} style={{ alignItems: 'flex-start' }}>
            <Label>Celular</Label>
            <TextInputMask
              value={props.data.celular}
              onChangeText={props.onChangeForm('celular')}
              refInput={ref => {
                this.input = ref;
              }}
              keyboardType="phone-pad"
              mask={'+55-[00]-[00000]-[0000]'}
            />
          </Item>
        </Form>
        <Button onPress={props.onClear}>
          <Text>Dsdsd</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignupPageOnePresentation;
