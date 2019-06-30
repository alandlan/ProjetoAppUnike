import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import style from './style';
import { Container, Button } from 'native-base';

const SignupPageOnePresentation = props => {
  return (
    <Container style={style.container}>
      <View style={style.form}>
        <Text style={style.header}>Dados de Contato</Text>
        <Text style={style.obs}>
          Vamos entrar em contato através dessas informações, escreva corretamente
        </Text>
        <TextInput placeholder="E-MAIL" style={style.input} keyboardType="email-address" />
        <TextInput placeholder="CELULAR(COM DDD)" style={style.input} keyboardType="phone-pad" />

        <View style={style.button}>
          <Button style={style.button} primary block large>
            <Text>Avançar</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default SignupPageOnePresentation;
