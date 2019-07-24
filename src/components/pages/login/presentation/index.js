import React from 'react';
import LogotipoImage from './images/login2.jpg';
import { Text, Image, TextInput, StatusBar, View } from 'react-native';
import style from './style.js';

import {
  Icon,
  Spinner,
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  H1
} from 'native-base';
const LoginPagePresentation = props => {
  return (
    <Container style={style.container} disabled={true}>
      <StatusBar hidden />
      <View style={style.header}>
        <Image width="100%" style={style.logo} source={LogotipoImage} />
        <H1 style={style.h1}>UNIKE - Autenticação</H1>
      </View>
      <View style={style.form}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={props.value.email}
              onChangeText={props.onChange('email')}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={props.value.password}
              onChangeText={props.onChange('password')}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
          </Item>
          <View style={style.button}>
            <Button primary block large onPress={props.onLogin} disabled={props.load}>
              <Spinner style={[!props.load ? style.hidden : null]} color="white" />
              <Text> Entrar </Text>
            </Button>
          </View>
        </Form>
      </View>
      <View style={style.signup}>
        <Text onPress={props.onSignup}>Signup</Text>
      </View>
    </Container>
  );
};
export default LoginPagePresentation;
